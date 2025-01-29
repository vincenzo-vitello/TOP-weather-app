import getWeatherData from './api-handling';
import getLocation from './location';
import getCurrentDate from './date';
import { updateWeatherInfo, createForecastElements } from './domElements';

const form = document.getElementById('location-form');
const input = document.querySelector('input');

async function renderBody(location) {
  try {
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
    console.error('Error while rendering data: ', error);
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

export default formListener;
