import axios from "axios";

const instance = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/",
    timeout: 1500,
});

export const getDogs = () => {
    return instance
        .get("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            if (response.data.status !== "success") {
                throw new Error();
            }
            return response.data.message;
        });
};

export const getFoxs = () => {
    return instance
        .get("https://randomfox.ca/floof/")
        .then((response) => {
            if (!response.data.image) {
                throw new Error();
            }
            return response.data.image;
        });
};

export const getCats = () => {
    return instance
        .get("https://aws.random.cat/meow")
        .then((response) => {
                if (!response.data.file) {
                    throw new Error();
                }
                return response.data.file;
        });
};
