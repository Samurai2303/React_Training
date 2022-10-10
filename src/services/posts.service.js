import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

let postsService = {
    getAll: () => axiosInstance(urls.posts)
}

export {postsService};
