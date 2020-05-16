export const UPDATE_WEATHER = "GET_WEATHER";
export const CHANGE_LIMIT = "CHANGE_LIMIT";
export const GET_WEATHER_FAILURE = "GET_WEATHER_FAILURE";
export const SET_WEATHER_LOADING = "SET_WEATHER_LOADING";

export const changeLimit = (limit) => ({
  type: CHANGE_LIMIT,
  payload: { limit },
});

export const updateWeather = (weather) => ({
  type: UPDATE_WEATHER,
  payload: { weather },
});

export const setWeatherLoading = () => ({
  type: SET_WEATHER_LOADING,
});

export const getWeatherFailure = (error) => ({
  type: GET_WEATHER_FAILURE,
  payload: { error },
});
