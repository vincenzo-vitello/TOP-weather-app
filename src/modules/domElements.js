const elements = {
  date: document.querySelector('#date'),
  location: document.querySelector('#location'),
  conditions: document.querySelector('#conditions'),
  hourlyConditions: document.querySelector('#hourly-conditions'),
  temperature: document.querySelector('#temperature'),
  maxTemp: document.querySelector('#max-temp'),
  minTemp: document.querySelector('#min-temp'),
  feelsLike: document.querySelector('#feelslike'),
  humidity: document.querySelector('#humidity'),
  cloudCover: document.querySelector('#cloud-cover'),
  precipitation: document.querySelector('#precipit'),
};

export function updateWeatherInfo(data) {
  elements.date.innerText = `${data.location.localtime}`;
  elements.location.innerText = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
  elements.conditions.innerText = `${data.current.condition.text}`;
  elements.temperature.innerText = `${data.current.temp_c}C°`;
  elements.maxTemp.innerText = `MAX: ${data.forecast.forecastday[0].day.maxtemp_c} C°`;
  elements.minTemp.innerText = `MIN: ${data.forecast.forecastday[0].day.mintemp_c} C°`;
  elements.feelsLike.innerText = `${data.current.feelslike_c} C°`;
  elements.humidity.innerText = `${data.current.humidity}%`;
  elements.cloudCover.innerText = `${data.current.cloud}%`;
  elements.precipitation.innerText = `${data.current.precip_mm} mm`;
}

export function createForecastElements(forecast, currentDate) {
  const forecastDayContainer = document.createElement('div');
  forecastDayContainer.classList.add('forecast-container');
  document.querySelector('.additional-infos').appendChild(forecastDayContainer);
  forecast.forEach((fcDay) => {
    if (fcDay.date !== currentDate) {
      const fcDayData = document.createElement('div');
      fcDayData.classList.add('fc-day-data');

      const fcDayDate = document.createElement('p');
      const fcDayTemp = document.createElement('p');
      const fcDayConditions = document.createElement('p');
      const fcDayIcon = document.createElement('img');

      fcDayDate.innerText = fcDay.date;
      fcDayTemp.innerText = `${fcDay.day.maxtemp_c} C°`;
      fcDayConditions.innerText = fcDay.day.condition.text;
      fcDayIcon.src = fcDay.day.condition.icon;

      fcDayData.appendChild(fcDayDate);
      fcDayData.appendChild(fcDayTemp);
      fcDayData.appendChild(fcDayConditions);
      fcDayData.appendChild(fcDayIcon);

      forecastDayContainer.appendChild(fcDayData);
    }

    if (fcDay.date === currentDate && fcDay.hour) {
      const now = new Date();
      const currentHour = now.getHours();

      fcDay.hour.forEach((hour) => {
        const hourTime = new Date(hour.time).getHours();
        if (hourTime >= currentHour) {
          const hourlyCondition = document.createElement('div');
          hourlyCondition.className = 'hourly-condition';

          const hourElement = document.createElement('p');
          hourElement.innerText = hourTime === currentHour ? 'now' : `${hourTime}:00`;

          const tempElement = document.createElement('p');
          tempElement.innerText = `${hour.temp_c} C°`;

          const conditionIcon = document.createElement('img');
          conditionIcon.src = hour.condition.icon;

          hourlyCondition.appendChild(hourElement);
          hourlyCondition.appendChild(conditionIcon);
          hourlyCondition.appendChild(tempElement);

          elements.hourlyConditions.appendChild(hourlyCondition);
        }
      });
    }
  });
}

export function clearWeatherInfo() {
  elements.date.innerText = '';
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

  while (elements.hourlyConditions.firstChild) {
    elements.hourlyConditions.removeChild(elements.hourlyConditions.firstChild);
  }
}
