import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

let photosService = {
    getAll: () => axiosInstance(urls.photos),
};

export {photosService};