import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./reducers/authReducer";
import usersReducer from "./reducers/usersReducer";
import apiReducer from "./reducers/apiReducer";

let reducers = combineReducers({
    auth: authReducer,
    subUsers: usersReducer,
    api: apiReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
