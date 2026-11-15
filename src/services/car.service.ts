import axios from "axios";
import type {Car} from "../types/Car.ts";

const axiosInstance = axios.create(
    {
        baseURL: "http://bigbird.space/carsAPI/v1"
    });

export const getCars = async (): Promise<Car[]> =>
{
    const {data} = await axiosInstance.get<Car[]>('/cars');
    return data;
}

export const addCar = async (car: Car): Promise<Car> =>
{
    const {data} = await axiosInstance.post<Car>('/cars', car);
    return data;
}

export const getErrorMessage = (error: unknown): string =>
{
    if (axios.isAxiosError(error))
    {
        if (error.response)
        {
            const serverMessage = error.response.data?.message ?? error.response.data?.error;
            return typeof serverMessage === 'string'
                ? `Server rejected the car: ${serverMessage}`
                : `Server rejected the car (status ${error.response.status})`;
        }
        return 'Cannot reach the server. Check your connection and try again';
    }
    return 'Something went wrong. Try again';
}