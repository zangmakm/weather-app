import { combineReducers } from "redux";
import searchbar from "./searchbarReducer";
import weather from "./weatherReducer";

export default combineReducers({
  searchbar,
  weather,
});
