const UPDATE_USERS = "USERS_REDUCER_UPDATE_USERS";
const UPDATE_KEYS_USERS = "USERS_REDUCER_UPDATE_KEYS_USERS";

const updateData = () => {
    let keys = Object.keys(localStorage).filter((u) => u !== "user");
    let users = {};
    for (let key of keys) {
        users[key] = JSON.parse(localStorage.getItem(key));
    }
    return [keys, users];
};
// Важно!!!
// function setArray(array) {
//     let newArray = [];
//     array.map(item =>
//       newArray.push({
//         id: item._id,
//         text: item.text
//       })
//     );
  
//     return newArray;
//   }





const initialState = {
    keySubUsers: updateData()[0],
    users: updateData()[1],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USERS:
            return {
                ...state,
                users: { ...action.subUsers },
            };

        case UPDATE_KEYS_USERS:
            if (action.key === null) return { ...state, keySubUsers: [] };
            return {
                ...state,
                keySubUsers: [...action.keys],
            };

        default:
            return state;
    }
};

export const updateUsersCreator = (subUsers = {}) => {
    return {
        type: UPDATE_USERS,
        subUsers,
    };
};

export const updateKeySubUsersCreator = (keys = []) => {
    return {
        type: UPDATE_KEYS_USERS,
        keys,
    };
};

export const updateSubUsersThunk = (subUser, id) => {
    return (dispatch) => {
        localStorage.removeItem([id], JSON.stringify(subUser));
        localStorage.setItem([subUser.fullName], JSON.stringify(subUser));

        dispatch(updateKeySubUsersCreator(updateData()[0]));
        dispatch(updateUsersCreator(updateData()[1]));
    };
};

export default usersReducer;
