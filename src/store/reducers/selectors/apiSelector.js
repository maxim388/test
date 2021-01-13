import { createSelector } from "reselect";

const getNameAPI = (state, key) => {
    return state.api[key].nameAPI;
};

const getDefaultImgUrl = (state, key) => {
    return state.api[key].defaultImgUrl;
};

const getDescription = (state, key) => {
    return state.api[key].description;
};

const getIsFetching = (state, key) => {
    return state.api[key].isFetching;
};

const getResult = (state, key) => {
    return state.api[key].result;
};

export const getAnimalSelector = () => {
    return createSelector(
        [
            getNameAPI,
            getDefaultImgUrl,
            getDescription,
            getIsFetching,
            getResult,
        ],
        (nameAPI, defaultImgUrl, description, isFetching, result) => {
            return {
                nameAPI,
                defaultImgUrl,
                description,
                isFetching,
                result,
            };
        }
    );
};
