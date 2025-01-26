// eslint-disable-next-line no-useless-concat
const location = 'empoli' + '?';
const API_KEY = 'key=V62MCK5GQYBYDFTZWGWP5C9VX';
const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location + API_KEY}
`;

async function getWeatherData() {
  try {
    const res = await fetch(API_URL, { mode: 'cors' });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert("Sorry, seems like this please doesn't exist.");
    console.log('There was an error: ', err);
  }
}

export default getWeatherData;
