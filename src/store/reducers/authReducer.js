const LOGIN = "AUTH_REDUCER_USER_LOGIN";
const LOGOUT = "AUTH_REDUCER_USER_LOGOUT";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? { user, isAuth: true }
    : { user: { userName: "", password: "" }, isAuth: false };

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

const login = (user) => {
    return {
        type: LOGIN,
        user,
    };
};

const logout = () => {
    return {
        type: LOGOUT,
    };
};

export const loginThunk = (user) => {
    return (dispatch) => {
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(login(user));
    };
};

export const logoutThunk = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    };
};

export default authReducer;
