import axios from "axios";
import {baseURL} from "../configs";
import {authService} from "./auth.service";
import {createBrowserHistory} from 'history';

let history = createBrowserHistory();

let axiosInstance = axios.create({baseURL});

let isRefreshing = false;

axiosInstance.interceptors.request.use((config) => {
    let access = authService.getAccessToken();
    if (access) {
        config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
});

axiosInstance.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    let refresh = authService.getRefreshToken();

    if (refresh && !isRefreshing && error.response.status === 401) {
        try {
            isRefreshing = true;
            let {data} = authService.refresh(refresh);
            authService.setTokens(data);
        } catch (e) {
            authService.deleteTokens();
            history.replace('./login?expSession=true');
        }
        isRefreshing = false;
        return axiosInstance(error.config)
    }
    return Promise.reject(error);


})


export {axiosInstance, history};