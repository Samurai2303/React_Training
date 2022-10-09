import {axiosService} from "./axios.service";
import {urls} from "../configs";

let commentsService = {
    getAll: () => axiosService(urls.comments),
    getById: (id) => axiosService(`${urls.comments}/${id}`)
};

export {commentsService};