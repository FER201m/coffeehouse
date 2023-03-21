import axios from "axios";

import {
  FETCH_DRINKS_REQUEST,
  FETCH_DRINKS_SUCCESS,
  FETCH_DRINKS_ERROR,
  ADD_DINK,
  REMOVE_DINK,
} from "./types";

export const fetchDrinks = () => {
  return async (dispatch, getState) => {
    dispatch(fetchDrinksRequest());
    try {
      const res = await axios.get("http://localhost:8800/api/drinks/available");
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


// add order drinks
export function addOrder(order) {
    return {
        type: ADD_DINK,
        item: order
    }
}

export function removeOrder(id) {
    return {
        type: REMOVE_DINK,
        itemId: id
    }
}