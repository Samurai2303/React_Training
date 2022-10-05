import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

let commentsService = {
    getAll: () => axiosInstance(urls.comments),
    getById: (id) => axiosInstance(`${urls.comments}/${id}`)
}

export {commentsService};