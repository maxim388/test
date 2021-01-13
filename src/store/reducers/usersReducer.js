const SET_USER = "USERS_REDUCER_SET_USER";
const UPDATE_USER = "USERS_REDUCER_UPDATE_USER";
const DELETE_USER = "USERS_REDUCER_DELETE_USER";
const CLEAR_USERS = "USERS_REDUCER_CLEAR_USERS";


const initialLocal = () => {
    
    let keys = Object.keys(localStorage).filter((u) => u !== "user");
    let users = [];
    let i = 0;

    for (let key of keys) {
        users[i] = JSON.parse(localStorage.getItem(key));
        i++;
    }
    return [users, keys];
};
const init = initialLocal();

const initialState = {
    users: init[0],
    keySubUsers: init[1],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                users: [...state.users, action.user],
                keySubUsers: [...state.keySubUsers, action.user.fullName],
            };
        case UPDATE_USER:
            return {
                ...state,
                users: [
                    ...state.users.slice(0, action.index),
                    action.user,
                    ...state.users.slice(action.index + 1),
                ],
                keySubUsers: [
                    ...state.keySubUsers.slice(0, action.index),
                    action.user.fullName,
                    ...state.keySubUsers.slice(action.index + 1),
                ],
            };
        case DELETE_USER:
            return {
                ...state,
                users: [
                    ...state.users.slice(0, action.index),
                    ...state.users.slice(action.index + 1),
                ],
                keySubUsers: [
                    ...state.keySubUsers.slice(0, action.index),
                    ...state.keySubUsers.slice(action.index + 1),
                ],
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                keySubUsers: [],
            };

        default:
            return state;
    }
};

const setUser = (user) => {
    return {
        type: SET_USER,
        user,
    };
};

const updateUser = (user, index) => {
    return {
        type: UPDATE_USER,
        user,
        index,
    };
};

const deleteUser = (index) => {
    return {
        type: DELETE_USER,
        index,
    };
};

export const clearUsers = () => {
    return {
        type: CLEAR_USERS,
    };
};

export const setUserThunk = (user, indexClone) => {
    return (dispatch) => {
        let match = localStorage.getItem(user.fullName);
        localStorage.setItem([user.fullName], JSON.stringify(user));

        if (!match) {
            dispatch(setUser(user));
        } else {
            dispatch(updateUser(user, indexClone));
        }
    };
};

export const updateUserThunk = (user, key, index, indexClone) => {
    return (dispatch) => {
        localStorage.removeItem([key]);
        localStorage.setItem([user.fullName], JSON.stringify(user));
        dispatch(updateUser(user, index));

        if (index !== indexClone && indexClone !== -1) {
            dispatch(deleteUser(indexClone));
        }
    };
};

export const deleteUserThunk = (key, index) => {
    return (dispatch) => {
        localStorage.removeItem([key]);
        dispatch(deleteUser(index));
    };
};

export default usersReducer;
