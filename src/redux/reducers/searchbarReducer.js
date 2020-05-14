import { CHANGE_INPUT } from "../actions/searchbarAction";
import { HANDLE_UNIT } from "../actions/searchbarAction";

const initialState = {
  input: "",
  unit: "c",
};

const searchBar = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.payload.input,
      };

    case HANDLE_UNIT:
      return {
        ...state,
        unit: state.unit === "c" ? "f" : "c",
      };

    default:
      return state;
  }
};

export default searchBar;
