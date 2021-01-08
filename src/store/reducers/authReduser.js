const LOGIN = "AUTH_REDUSER_USER_LOGIN";
const LOGOUT = "AUTH_REDUSER_USER_LOGOUT";

let user = JSON.parse(localStorage.getItem("user"));

const initialState = user ? { user, isAuth: true } : {user: {userName: "", password: ""}};

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: {
                    userName: action.userName,
                    password: action.password,
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

export const loginCreator = (userName, password) => {
    return {
        type: LOGIN,
        userName,
        password,
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
        dispatch(logoutCreator())
    }
}


export default authReduser;
