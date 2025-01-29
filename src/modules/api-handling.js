const API_KEY = 'key=558a618dfd01412f842102609252901';

async function getWeatherData(location) {
  let API_URL;
  if (location.includes(',')) {
    const [latitude, longitude] = location.split(',');
    API_URL = `http://api.weatherapi.com/v1/forecast.json?${API_KEY}&q=${latitude},${longitude}&days=7&aqi=no&alerts=no`;
  } else {
    API_URL = `http://api.weatherapi.com/v1/forecast.json?${API_KEY}&q=${location}&days=7&aqi=no&alerts=no`;
  }

  try {
    const res = await fetch(API_URL, { mode: 'cors' });
    const data = await res.json();
    return data;
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert("Sorry, seems like this place doesn't exist.");
    console.log('There was an error: ', err);
    return null;
  }
}

export default getWeatherData;
