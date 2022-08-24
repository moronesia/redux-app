import counterReducer from "./features/Counter/reducer";
import { applyMiddleware, combineReducers, compose, } from 'redux';
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";


let rootReducers = combineReducers({
    counter: counterReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = configureStore({reducer:rootReducers}, composeEnhancers(applyMiddleware(thunk)));

export default store;