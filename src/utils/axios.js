import axios from "axios";

export const getWeatherData = (city) => {
  return axios
    .get(`https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=${city}`)
    .then((res) => res.data.data);
};
