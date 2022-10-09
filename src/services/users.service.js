import {axiosService} from "./axios.service";
import {urls} from "../configs";

let usersService = {
    getAll: () => axiosService(urls.users),
    getById: (id) => axiosService(`${urls.users}/${id}`)
}

export {usersService};
