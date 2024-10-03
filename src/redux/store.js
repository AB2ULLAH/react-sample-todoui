// src/redux/store.js
import { createStore } from "redux";
import rootReducer from "./combineReducers"; // Import the combined reducers

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f // Fallback function
);

export default store;
