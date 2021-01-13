import { getDogs, getCats, getFoxs } from "../../api/api";
import defaultAnimalDog from "../../img/animal_dog.jpg";
import defaultAnimalFox from "../../img/animal_fox.jpg";
import defaultAnimalCat from "../../img/animal_cat.jpg";

const SET_ANIMAL = "API_REDUCER_SET_ANIMAL";
const TOOGLE_IS_FETCHING = "API_REDUCER_TOOGLE_IS_FETCHING";
const RANDOM_CARDS = "API_REDUCER_RANDOM_CARDS";

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
    keysApi: ["Dogs", "RandomFox", "RandomCat"],
};

const apiReducer = (state = initialState, action) => {
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
        case RANDOM_CARDS:
            return {
                ...state,
                keysApi: [...action.randomApi],
            };
        default:
            return state;
    }
};

const toogleIsFetching = (isFetching, key) => {
    return {
        type: TOOGLE_IS_FETCHING,
        isFetching,
        key,
    };
};

const setAnimal = (url, key) => {
    return {
        type: SET_ANIMAL,
        url,
        key,
    };
};

const randomCards = (randomApi) => {
    return {
        type: RANDOM_CARDS,
        randomApi,
    };
};

const getAnimalThunk = async (apiKey, getAnimal, dispatch) => {
    dispatch(toogleIsFetching(true, apiKey));

    let url = await getAnimal();

    dispatch(setAnimal(url, apiKey));
    dispatch(toogleIsFetching(false, apiKey));
};

export const getDogsThunk = (apiKey) => {
    return async (dispatch) => {
        getAnimalThunk(apiKey, getDogs, dispatch);
    };
};

export const getRandomFoxThunk = (apiKey) => {
    return async (dispatch) => {
        getAnimalThunk(apiKey, getFoxs, dispatch);
    };
};

export const getRandomCatThunk = (apiKey) => {
    return async (dispatch) => {
        getAnimalThunk(apiKey, getCats, dispatch);
    };
};

export const randomThunk = (keysApi) => {
    return (dispatch) => {
        const random = () => {
            let cards = keysApi.slice();
            let randomCards = [];
            let k = cards.length;
            for (let i = 0; i < k; i) {
                let num = (Math.random() - 0.5) * (cards.length + 1);
                let [elem] = cards.splice(Math.round(num), 1);
                if (elem) {
                    randomCards.push(elem);
                    i++;
                }
            }
            return randomCards;
        };
        dispatch(randomCards(random()));
    };
};

export default apiReducer;
