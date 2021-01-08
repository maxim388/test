import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReduser from "./reducers/authReduser";
import usersReducer from "./reducers/usersReducer";



let reducers = combineReducers({
    auth: authReduser,
    subUsers: usersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.store = store;

export default store;