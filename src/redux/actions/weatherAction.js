export const GET_WEATHER = "GET_WEATHER";
export const CHANGE_LIMIT = "CHANGE_LIMIT";

export const changeLimit = (limit) => ({
  type: CHANGE_LIMIT,
  payload: { limit },
});

export const getWeather = (weather) => ({
  type: GET_WEATHER,
  payload: { weather },
});
