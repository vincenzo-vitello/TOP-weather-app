// eslint-disable-next-line no-useless-concat
const API_KEY = 'key=V62MCK5GQYBYDFTZWGWP5C9VX';

async function getWeatherData(location) {
  const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${`${location}?${API_KEY}`}
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
