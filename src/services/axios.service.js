import axios from "axios";
import {baseUrl} from "../configs";

let axiosInstance = axios.create({baseURL: baseUrl});

export {axiosInstance};

