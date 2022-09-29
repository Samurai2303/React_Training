import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

let postsService = {
    getAll: () => axiosInstance(urls.posts),
    getById: (id) => axiosInstance(urls.posts + '/' + id),
    getPostsOfUser: (userId) => axiosInstance(urls.users + '/' + userId + urls.posts),

};
    export {postsService};