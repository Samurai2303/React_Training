import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

let usersUrl = urls.users;

let usersService = {
    getAll: () => axiosInstance(usersUrl),
    getById: (id) => axiosInstance(`${usersUrl}/${id}`),
    post: (data) => axiosInstance.post(urls.users, data),
    update: (userId, data) => axiosInstance.put(`${urls.users}/${userId}`, data)

}

export {usersService};