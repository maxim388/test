import { createSelector } from "reselect";

// export const getOptions = (state, key) => {
//     return createSelector(
//         [getNameAPI, getDefaultImgUrl, getDescription, getIsFetching],
//         (nameAPI, defaultImgUrl, description, isFetching) => {
//             return {
//                 nameAPI: getNameAPI(state, "Dogs"),
//                 defaultImgUrl: getDefaultImgUrl(state, "Dogs"),
//                 description: getDescription(state, "Dogs"),
//                 isFetching: getIsFetching(state, "Dogs"),
//             };
//         }
//     );
// };


// export const keyApi = createSelector([], () =>{
//     return
// })





export const getNameAPI = (state, key) => {
    return state.workWithAPI[key].nameAPI;
};

export const getDefaultImgUrl = (state, key) => {
    return state.workWithAPI[key].defaultImgUrl;
};

export const getDescription = (state, key) => {
    return state.workWithAPI[key].description;
};

export const getIsFetching = (state, key) => {
    return state.workWithAPI[key].isFetching;
};

export const getResult = (state, key) => {
    return state.workWithAPI[key].result;
};
