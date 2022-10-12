import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

let todosService = {
    getAll: () => axiosInstance(urls.todos)
};

export {todosService};
