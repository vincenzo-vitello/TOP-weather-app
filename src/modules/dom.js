import getWeatherData from './api-handling';
import getLocation from './location';

const form = document.getElementById('location-form');
const input = document.querySelector('input');

const elements = {
  date: document.querySelector('#date'),
  timezone: document.querySelector('#timezone'),
  location: document.querySelector('#location'),
  conditions: document.querySelector('#conditions'),
  temperature: document.querySelector('#temperature'),
  feelsLike: document.querySelector('#feelslike'),
  humidity: document.querySelector('#humidity'),
  cloudCover: document.querySelector('#cloud-cover'),
  precipitation: document.querySelector('#precipit'),
};

async function renderBody(location) {
  try {
    const data = await getWeatherData(location);

    if (!data || !data.days || data.days.length === 0) {
      console.error('Dati mancanti o non validi');
      return;
    }

    const today = data.days[0];
    elements.date.innerText += today.datetime;
    elements.timezone.innerText += data.timezone;
    elements.location.innerText += data.address.trim();
    elements.conditions.innerText += data.description;

    // Conversione Fahrenheit -> Celsius
    const tempMaxCelsius = ((today.tempmax - 32) * 5) / 9;
    const tempMinCelsius = ((today.tempmin - 32) * 5) / 9;

    elements.temperature.innerText += `${tempMaxCelsius.toFixed(1)}°C`; // Temp. massima convertita
    elements.feelsLike.innerText += `${tempMinCelsius.toFixed(1)}°C`; // Temp. minima convertita
    elements.humidity.innerText += `${today.humidity || 'N/A'}%`;
    elements.cloudCover.innerText += `${today.cloudcover || 'N/A'}%`;
    elements.precipitation.innerText += `${today.precip || 0} mm`;

    console.log(data);
  } catch (error) {
    console.error('Errore durante il rendering dei dati:', error);
  }
}

function formListener() {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const locationInput = input.value.trim();
    const location = getLocation(locationInput);

    form.reset();
    await renderBody(location);
    console.log(locationInput);
  });
}

export default formListener;
