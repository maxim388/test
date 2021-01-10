const LOGIN = "AUTH_REDUCER_USER_LOGIN";
const LOGOUT = "AUTH_REDUCER_USER_LOGOUT";

let user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? { user, isAuth: true }
    : { user: { userName: "", password: "" } };

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: {
                    ...action.user,
                },
                isAuth: true,
            };
        case LOGOUT:
            return {
                ...state,
                user: {},
                isAuth: false,
            };
        default:
            return state;
    }
};

export const loginCreator = (user) => {
    return {
        type: LOGIN,
        user,
    };
};

export const logoutCreator = () => {
    return {
        type: LOGOUT,
    };
};

export const logoutThunk = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logoutCreator());
    };
};

export default authReducer;
