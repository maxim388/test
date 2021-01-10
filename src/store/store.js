import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./reducers/authReducer";
import usersReducer from "./reducers/usersReducer";
import workWithAPIReducer from "./reducers/workWithAPIReducer";

let reducers = combineReducers({
    auth: authReducer,
    subUsers: usersReducer,
    workWithAPI: workWithAPIReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.store = store;

export default store;
