export const BASE_URL = "https://jsonplaceholder.typicode.com";


export const GET = async (endpoint) => {

    const res = await fetch(`${BASE_URL}${endpoint}`);
    const data = await res.json();
    data.forEach((element) => { element.age = Math.floor(Math.random() * 99) });
    return data;
};
