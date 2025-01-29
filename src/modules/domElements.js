export const elements = {
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

export function updateWeatherInfo(data) {
  elements.date.innerText = `Date: ${data.location.localtime}`;
  elements.timezone.innerText = `Timezone: ${data.location.tz_id}`;
  elements.location.innerText = `Location: ${data.location.name}, ${data.location.region}, ${data.location.country}`;
  elements.conditions.innerText = `Conditions:  ${data.current.condition.text}`;
  elements.temperature.innerText = `Temperature: ${data.current.temp_c}C°`;
  elements.feelsLike.innerText = `Feels like: ${data.current.feelslike_c}°C`;
  elements.humidity.innerText = `Humidity: ${data.current.humidity}%`;
  elements.cloudCover.innerText = `Cloud cover: ${data.current.cloud}%`;
  elements.precipitation.innerText = `Precipitations: ${data.current.precip_mm} mm`;
}

export function createForecastElements(forecast, currentDate) {
  const forecastDayContainer = document.createElement('div');
  forecastDayContainer.classList.add('forecast-container');
  document.body.appendChild(forecastDayContainer);
  forecast.forEach((fcDay) => {
    if (fcDay.date !== currentDate) {
      const fcDayData = document.createElement('div');
      fcDayData.classList.add('fc-day-data');

      const fcDayDate = document.createElement('p');
      const fcDayTemp = document.createElement('p');
      const fcDayIcon = document.createElement('img');

      fcDayDate.innerText = fcDay.date;
      fcDayTemp.innerText = `${fcDay.day.maxtemp_c} C°`;
      fcDayIcon.src = fcDay.day.condition.icon;

      fcDayData.appendChild(fcDayDate);
      fcDayData.appendChild(fcDayTemp);
      fcDayData.appendChild(fcDayIcon);

      forecastDayContainer.appendChild(fcDayData);
    }
  });
}

export function clearWeatherInfo() {
  elements.date.innerText = '';
  elements.timezone.innerText = '';
  elements.location.innerText = '';
  elements.conditions.innerText = '';
  elements.temperature.innerText = '';
  elements.feelsLike.innerText = '';
  elements.humidity.innerText = '';
  elements.cloudCover.innerText = '';
  elements.precipitation.innerText = '';

  const forecastContainer = document.querySelector('.forecast-container');
  if (forecastContainer) {
    forecastContainer.remove();
  }
}
