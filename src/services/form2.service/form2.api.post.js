import axios from "axios";

export function postObj(data) {
    return(
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
    )
}

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
});

export function postUsingAxios(data) {
    return axiosInstance.post('', {data: data});
}