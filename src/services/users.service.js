import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

let usersUrl = urls.users;

let usersService = {
    getAll: () => axiosInstance(usersUrl),
    getById: (id) => axiosInstance(`${usersUrl}/${id}`),


}

export {usersService};