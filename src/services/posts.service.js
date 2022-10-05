import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

let postsService = {
    getAll: () => axiosInstance(urls.posts),
    getById: (id) => axiosInstance(`${urls.posts}/${id}`)
}

export {postsService};