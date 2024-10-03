// src/redux/combineReducers.js
import { combineReducers } from "redux";
import reducers from "./reducers"; // Import default export

const rootReducer = combineReducers({
    example: reducers, // You can rename this key as needed
});

export default rootReducer;
