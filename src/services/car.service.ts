import axios from "axios";
import type {Car} from "../types/Car.ts";

const axiosInstance = axios.create(
{
    baseURL: "http://bigbird.space/carsAPI/v1"
});

export const getCars = async ():Promise<Car[]> =>
{
    const {data} = await axiosInstance.get<Car[]>('/cars');
    return data;
}

export const addCar = async (car: Car) =>
{
    await axiosInstance.post('/cars', car);
}