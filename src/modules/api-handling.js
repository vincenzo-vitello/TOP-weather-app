// eslint-disable-next-line no-useless-concat
const API_KEY = 'key=558a618dfd01412f842102609252901';

async function getWeatherData(location) {
  const API_URL = `http://api.weatherapi.com/v1/forecast.json?${`${API_KEY}&q=${location}&days=7&aqi=no&alerts=no`}
`;
  try {
    const res = await fetch(API_URL, { mode: 'cors' });
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert("Sorry, seems like this please doesn't exist.");
    console.log('There was an error: ', err);
    return null;
  }
}

export default getWeatherData;
