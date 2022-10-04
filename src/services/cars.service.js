import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

let carsService = {
    getAll: () => axiosInstance(urls.cars),
    createCar: (car) => axiosInstance.post(urls.cars, car),
    addPhotoById: (id, photo) => axiosInstance.patch(`${urls.cars}/${id}`, photo)
}

export {carsService};