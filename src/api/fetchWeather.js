import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/weather";
const api_key = "f33a484cf794d08d0148764789aaba32";

const fetchWeather = async (query) => {
  const { data } = await axios.get(url, {
    params: {
      q: query,
      units: "metric",
      APPID: api_key,
    },
  }); //axios is to perform a get request on the api

  return data;
};

export default fetchWeather;
