import { GET_WEATHER } from "../actions/weatherAction";
import { CHANGE_LIMIT } from "../actions/weatherAction";

const initialState = {
  city: [],
  current: [],
  forecasts: [],
  limit: 5,
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        city: action.payload.weather.city,
        current: action.payload.weather.current,
        forecasts: action.payload.weather.forecasts.slice(0, 10),
      };

    case CHANGE_LIMIT:
      return {
        ...state,
        limit: action.payload.limit,
      };

    default:
      return state;
  }
};

export default weather;
