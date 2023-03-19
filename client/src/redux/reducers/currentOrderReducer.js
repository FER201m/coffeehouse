import { ADD_DINK, REMOVE_DINK } from "../action/types";

const INITIAL_STATE = {
  currentOrders: [],
};

const currentOrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_DINK:
      return {
        ...state,
        currentOrders: [...state.currentOrders, action.item],
      };
    case REMOVE_DINK:
      return {
        ...state,
        currentOrders: [...state.currentOrders].filter(
          (item) => item._id !== action.itemId
        ),
      };
    default:
      return state;
  }
};

export default currentOrderReducer;
