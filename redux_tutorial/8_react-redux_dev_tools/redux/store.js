import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import countReducer from "./reducers/count";
import personReducer from "./reducers/person";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const allReducers = combineReducers({
    he: countReducer,
    rens: personReducer,
});

export default createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunk))
);
