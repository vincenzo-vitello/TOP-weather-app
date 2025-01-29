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
  elements.date.innerText += data.location.localtime;
  elements.timezone.innerText += data.location.tz_id;
  elements.location.innerText += `${data.location.name}, ${data.location.region}, ${data.location.country}`;
  elements.conditions.innerText += data.current.condition.text;
  elements.temperature.innerText += `${data.current.temp_c}C°`;
  elements.feelsLike.innerText += `${data.current.feelslike_c}°C`;
  elements.humidity.innerText += `${data.current.humidity}%`;
  elements.cloudCover.innerText += `${data.current.cloud}%`;
  elements.precipitation.innerText += `${data.current.precip_mm} mm`;
}

export function createForecastElements(forecast, currentDate) {
  const forecastDayContainer = document.createElement('div');
  forecastDayContainer.className = 'fc-dat-container';
  document.body.appendChild(forecastDayContainer);
  forecast.forEach((fcDay) => {
    if (fcDay.date !== currentDate) {
      const fcDayDate = document.createElement('p');
      const fcDayTemp = document.createElement('p');
      const fcDayConditions = document.createElement('p');
      fcDayDate.className = 'fc-day-date';
      fcDayTemp.className = 'fc-day-temp';
      fcDayConditions.className = 'fc-day-conditions';
      fcDayDate.innerText = fcDay.date;
      fcDayTemp.innerText = fcDay.day.maxtemp_c;
      fcDayConditions.innerText = fcDay.day.condition.text;
      forecastDayContainer.appendChild(fcDayDate);
      forecastDayContainer.appendChild(fcDayTemp);
      forecastDayContainer.appendChild(fcDayConditions);
    }
  });
}
