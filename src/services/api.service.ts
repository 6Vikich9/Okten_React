import type {IDummyJsonUsersResponse} from "../models/IReqResInResponse.ts";

export const getAllUsers = async (pg: string): Promise<IDummyJsonUsersResponse> => {
    const limit = 10;
    const skip = (parseInt(pg) - 1) * limit; // Рахуємо відступ прямо тут

    return await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
        .then(value => value.json());
}