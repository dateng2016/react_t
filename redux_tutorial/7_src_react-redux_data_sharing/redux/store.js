import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from "./reducers/count";
import personReducer from "./reducers/person";
import { thunk } from "redux-thunk";

const allReducers = combineReducers({
    he: countReducer,
    rens: personReducer,
});
export default createStore(allReducers, applyMiddleware(thunk));
