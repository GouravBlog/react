import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { counterReducer, usersReducer } from "./reducer/CounterReducer";

const rootReducer = combineReducers({
    counterReducer,
    users: usersReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;