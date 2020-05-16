import { getWeatherData } from "../../utils/axios";
import {
  updateWeather,
  setWeatherLoading,
  getWeatherFailure,
} from "./weatherAction";

export const CHANGE_INPUT = "CHANGE_INPUT";
export const HANDLE_UNIT = "HANDLE_UNIT";

export const changeInputValue = (input) => ({
  type: CHANGE_INPUT,
  payload: { input },
});

export const handleUnit = () => ({
  type: HANDLE_UNIT,
});

export const loadWeather = (city) => (dispatch, getState) => {
  dispatch(setWeatherLoading());

  return getWeatherData(city)
    .then((data) => {
      const weather = {
        city: data.city,
        current: data.current,
        forecasts: data.forecast.slice(0, 10),
      };
      dispatch(updateWeather(weather));
    })
    .catch((error) => dispatch(getWeatherFailure(error)));
};
