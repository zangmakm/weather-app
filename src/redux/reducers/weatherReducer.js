import {
  UPDATE_WEATHER,
  CHANGE_LIMIT,
  SET_WEATHER_LOADING,
  GET_WEATHER_FAILURE,
} from "../actions/weatherAction";

const initialState = {
  city: [],
  current: [],
  forecasts: [],
  limit: 5,
  isLoading: false,
  error: "",
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_WEATHER:
      return {
        ...state,
        city: action.payload.weather.city,
        current: action.payload.weather.current,
        forecasts: action.payload.weather.forecasts.slice(0, 10),
        isLoading: false,
        error: "",
      };

    case CHANGE_LIMIT:
      return {
        ...state,
        limit: action.payload.limit,
      };
    case SET_WEATHER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_WEATHER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default weather;
