const ADD_USERS = "USERS_REDUSER_ADD_USERS";
const UPDATE_KEYS_USERS = "USERS_REDUSER_UPDATE_KEYS_USERS";
const UPDATE_FULL_NAME = "USERS_REDUSER_UPDATE_FULL_NAME";


let keys = Object.keys(localStorage).filter((u) => u !== "user");
let users = {};
for (let key of keys) {
    users[key] = JSON.parse(localStorage.getItem(key));
}

const initialState = {
    users: users,
    keySubUsers: keys,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS:
            let key = action.subUser.fullName;
   
            return {
                
                ...state,
                users: {
                    ...state.users,
                    [key]: { ...action.subUser, id: action.id },
                },
            };
        case UPDATE_KEYS_USERS:
            if (action.key === null) return { ...state, keySubUsers: [] };
            return {
                ...state,
                keySubUsers: [...state.keySubUsers, action.key],
            };

        case UPDATE_FULL_NAME:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export const addUsersCreator = (subUser, id) => {

    return {
        type: ADD_USERS,
        subUser,
        id,
    };
};

export const updateKeySubUsersCreator = (key = null) => {
    return {
        type: UPDATE_KEYS_USERS,
        key,
    };
};




export const updateKeySubUsersThunk = (subUser) => {
    return (dispatch) => {
        localStorage.setItem([subUser.fullName], JSON.stringify(subUser));
        dispatch(updateKeySubUsersCreator(subUser.fullName));
    };
};

export default usersReducer;
