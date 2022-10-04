import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

let localStorageKeys = {
    access: 'access',
    refresh: 'refresh'
};

let authService = {
    register: (user) => axiosInstance.post(urls.users, user),
    login: (user) => axiosInstance.post(urls.auth.login, user),
    refresh: (refresh) => axiosInstance.post(urls.auth.refresh, {refresh}),
    setTokens: ({access, refresh}) => {
        localStorage.setItem(localStorageKeys.access, access);
        localStorage.setItem(localStorageKeys.refresh, refresh);
    },
    deleteTokens: () => {
        localStorage.removeItem(localStorageKeys.access);
        localStorage.removeItem(localStorageKeys.refresh);
    },
    getAccessToken: () => localStorage.getItem(localStorageKeys.access),
    getRefreshToken: () => localStorage.getItem(localStorageKeys.refresh)
};

export {authService, localStorageKeys};
