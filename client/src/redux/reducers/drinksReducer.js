import {
  FETCH_DRINKS_REQUEST,
  FETCH_DRINKS_SUCCESS,
  FETCH_DRINKS_ERROR,
} from "../action/types";

const INITIAL_STATE = {
  drinksList: [],
  isLoaing: false,
  isError: false,
  isCreating: false,
};

const drinkReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DRINKS_REQUEST:
      return {
        ...state,
      };
    case FETCH_DRINKS_SUCCESS:
      return {
        ...state,
        drinksList: action.drinks,
      };
    case FETCH_DRINKS_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default drinkReducer;
