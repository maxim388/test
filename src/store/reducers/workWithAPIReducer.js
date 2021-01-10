import { getDogs, getCats, getFoxs } from "../../api/api";
import defaultAnimalDog from "../../img/animal_dog.jpg";
import defaultAnimalFox from "../../img/animal_fox.jpg";
import defaultAnimalCat from "../../img/animal_cat.jpg";

const SET_ANIMAL = "WORK_WITH_API_REDUCER_SET_ANIMAL";
const TOOGLE_IS_FETCHING = "WORK_WITH_API_REDUCER_TOOGLE_IS_FETCHING";

const initialState = {
    Dogs: {
        nameAPI: "Dogs",
        defaultImgUrl: defaultAnimalDog,
        description: "Based on the Stanford Dogs Dataset",
        isFetching: false,
        result: "",
    },
    RandomFox: {
        nameAPI: "RandomFox",
        defaultImgUrl: defaultAnimalFox,
        description: "Random pictures of foxes",
        isFetching: false,
        result: "",
    },
    RandomCat: {
        nameAPI: "RandomCat",
        defaultImgUrl: defaultAnimalCat,
        description: "	Random pictures of cats",
        isFetching: false,
        result: "",
    },
};

const workWithAPIReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ANIMAL:
            return {
                ...state,
                [action.key]: {
                    ...state[action.key],
                    result: action.url,
                },
            };

        case TOOGLE_IS_FETCHING:
            return {
                ...state,
                [action.key]: {
                    ...state[action.key],
                    isFetching: action.isFetching,
                },
            };

        default:
            return state;
    }
};

export const toogleIsFetching = (isFetching, key) => {
    return {
        type: TOOGLE_IS_FETCHING,
        isFetching,
        key,
    };
};

export const setAnimalCreator = (url, key) => {
    return {
        type: SET_ANIMAL,
        url,
        key,
    };
};




const getAnimalCreator = async (apiKey, getAnimal, dispatch) => {
    dispatch(toogleIsFetching(true, apiKey));

    let responce = await getAnimal();

    if (!responce.data) {
        throw new Error();
    }

    dispatch(setAnimalCreator(responce.data.url, apiKey));
    dispatch(toogleIsFetching(false, apiKey));
};


export const getDogsThunk = (apiKey) => {
    return async (dispatch) => {
        getAnimalCreator(apiKey, getDogs, dispatch);
    };
};

export const getFoxsThunk = (apiKey) => {
    return async (dispatch) => {
        getAnimalCreator(apiKey, getFoxs, dispatch);
    };
};

export const getCatsThunk = (apiKey) => {
    return async (dispatch) => {
        getAnimalCreator(apiKey, getCats, dispatch);
    };
};



export default workWithAPIReducer;
