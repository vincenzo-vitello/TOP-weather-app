import getWeatherData from './api-handling';
import getLocation from './location';
import getCurrentDate from './date';
import { updateWeatherInfo, createForecastElements, clearWeatherInfo } from './domElements';

const form = document.getElementById('location-form');
const input = document.querySelector('input');

async function renderBody(location) {
  try {
    clearWeatherInfo();

    const data = await getWeatherData(location);

    if (!data || !data.location || !data.current) {
      console.error('Missing or invalid data');
      return;
    }
    console.log('data: ', data);
    console.log('forecast: ', data.forecast);
    updateWeatherInfo(data);
    createForecastElements(data.forecast.forecastday, getCurrentDate());
  } catch (error) {
    console.error('Error rendering data:', error);
  }
}

function formListener() {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const locationInput = input.value.trim();
    const location = getLocation(locationInput);

    form.reset();
    await renderBody(location);
  });
}

async function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const location = `${latitude},${longitude}`;
      await renderBody(location);
    }, (error) => {
      console.error('Error getting user location:', error);
      const defaultLocation = 'New York';
      renderBody(defaultLocation);
    });
  } else {
    console.error('Geolocation is not supported by this browser.');

    const defaultLocation = 'New York';
    renderBody(defaultLocation);
  }
}

export default function init() {
  formListener();
  getUserLocation();
}
