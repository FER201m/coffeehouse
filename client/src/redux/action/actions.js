import axios from "axios";

import {
  FETCH_DRINKS_REQUEST,
  FETCH_DRINKS_SUCCESS,
  FETCH_DRINKS_ERROR,
} from "./types";

export const fetchDrinks = () => {
  return async (dispatch, getState) => {
    dispatch(fetchDrinksRequest());
    try {
      const res = await axios.get("http://localhost:8800/api/drinks");
      const data = res && res.data ? res.data : [];
      dispatch(fetchDrinksSuccess(data));
    } catch (error) {
      console.log(`%c ${error}`, "red");
      dispatch(fetchDrinksError());
    }
  };
};

export function fetchDrinksRequest() {
  return {
    type: FETCH_DRINKS_REQUEST,
  };
}

export function fetchDrinksSuccess(data) {
  return {
    type: FETCH_DRINKS_SUCCESS,
    drinks: data,
  };
}

export function fetchDrinksError() {
  return {
    type: FETCH_DRINKS_ERROR,
  };
}
