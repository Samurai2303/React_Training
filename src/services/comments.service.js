import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

let commentsService = {
    getAll: () => axiosInstance(urls.comments),
};

export {commentsService};