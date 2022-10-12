import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

let usersService = {
    getAll: () => axiosInstance(urls.users),
    postUser: (user) => axiosInstance.post(urls.users, user)
};

export {usersService};