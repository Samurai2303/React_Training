import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

let usersService = {
    getAll: () => axiosInstance(urls.users)
}

export {usersService};