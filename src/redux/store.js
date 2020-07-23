import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./reducer";

const middleware = [thunk];
const initState = {};

const reducer = combineReducers({
  data: dataReducer,
});

const store = createStore(reducer, initState, applyMiddleware(...middleware));

export default store;
