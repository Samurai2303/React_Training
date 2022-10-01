import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

let photosService = {
    getAll: ()=>axiosInstance(urls.photos),
    getById: (id) => axiosInstance(`${urls.photos}/${id}`),
}

export {photosService};