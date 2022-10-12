import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

let albumsService = {
    getAll: () => axiosInstance(urls.albums),
};

export {albumsService};