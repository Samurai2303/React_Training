import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

let todosService = {
    getAll: () => axiosInstance(urls.todos),
    getById: (id) => axiosInstance(`${urls.todos}/${id}`),
    getTodosOfUser: (userId) => axiosInstance(`${urls.users}/${userId}${urls.todos}`),

}

export {todosService};