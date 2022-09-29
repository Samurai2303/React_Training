import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

let albumsService = {
    getAll: () => axiosInstance(urls.albums),
    getById: (id) => axiosInstance(`${urls.albums}/${id}`),
    getAlbumsOfUser: (userId) => axiosInstance(`${urls.users}/${userId}${urls.albums}`),
}

export {albumsService};