import { combineReducers } from "redux";
import drinkReducer from "./drinksReducer";
import currentOrderReducer from "./currentOrderReducer";

const rootReducer = combineReducers({
    drinks: drinkReducer,
    order: currentOrderReducer
})

export default rootReducer