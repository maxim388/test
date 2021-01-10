import axios from "axios";

const instance = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/",
});

export const getDogs = () => {
    return instance.get("https://random.dog/woof.json");
};

export const getFoxs = () => {
    return instance.get("https://randomfox.ca/floof/");
};

export const getCats = () => {
    return instance.get("https://aws.random.cat/meow");
};

// export const getAnimeNews = () => {
//     let arr = [
//         100,
//         101,
//         102,
//         200,
//         201,
//         202,
//         204,
//         206,
//         207,
//         300,
//         301,
//         302,
//         303,
//         304,
//         305,
//         307,
//     ];
//     function randomInteger() {
//         let num = 0.5 + Math.random() * (arr.length - 1 + 1);
//         return Math.round(num);
//     }

//     return instance.get(`https://http.cat/${arr[num]}`);
// };
