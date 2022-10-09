import {axiosService} from "./axios.service";
import {urls} from "../configs";

let postsService = {
    getAll: () => axiosService(urls.posts),
    getById: (id) => axiosService(`${urls.posts}/${id}`)
};

export {postsService};
