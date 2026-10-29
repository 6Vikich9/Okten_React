import axios from 'axios';
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import  {retriveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

type LoginData =
{
    username: string;
    password: string;
    expiresInMins: number
}

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});


axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
        // Automatically attach Bearer token to GET requests from localStorage[cite: 13]
    }
    return requestObject;

})


export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {

    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products');

    return products
}


export const refresh = async () => {

    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', // Send refresh token to get a new token pair[cite: 13]
    {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMin: 1
    });
    iUserWithTokens.accessToken = accessToken; // Update tokens inside user object and save back to storage[cite: 13]
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));


}