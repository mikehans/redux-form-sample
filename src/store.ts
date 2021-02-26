import { create } from "browser-sync";
import { createStore, applyMiddleware } from "redux";
import {  } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
