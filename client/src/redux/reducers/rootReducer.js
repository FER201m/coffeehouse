import { combineReducers } from "redux";
import drinkReducer from "./drinksReducer";

const rootReducer = combineReducers({
    drinks: drinkReducer
})

export default rootReducer