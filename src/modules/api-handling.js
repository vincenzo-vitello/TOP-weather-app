const API_KEY = 'key=558a618dfd01412f842102609252901';

export async function getWeatherData(location) {
  let API_URL;
  if (location.includes(',')) {
    const [latitude, longitude] = location.split(',');
    API_URL = `https://api.weatherapi.com/v1/forecast.json?${API_KEY}&q=${latitude},${longitude}&days=7&aqi=no&alerts=no`;
  } else {
    API_URL = `https://api.weatherapi.com/v1/forecast.json?${API_KEY}&q=${location}&days=7&aqi=no&alerts=no`;
  }

  try {
    const res = await fetch(API_URL, { mode: 'cors' });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert("Sorry, seems like this place doesn't exist.");
    console.log('There was an error: ', err);
    return null;
  }
}

export async function getAutoCompleteItems(query) {
  if (!query) return [];

  try {
    const response = await fetch(`https://api.weatherapi.com/v1/search.json?${API_KEY}&q=${query}`, { mode: 'cors' });
    if (!response.ok) throw new Error('Error fetching suggestions data');
    const res = await response.json();
    console.log(res);
    return res;
  } catch (err) {
    console.log('Error with autocompletion: ', err);
    return [];
  }
}
