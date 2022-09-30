import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

let commentsService = {
    getAll: () => axiosInstance(urls.comments),
    getById: (id) => axiosInstance(urls.comments + '/' + id),
    getCommentsOfPost: (postId) => axiosInstance(urls.posts + '/' + postId + urls.comments),

}

export {commentsService};