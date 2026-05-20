import type {IUser} from "./IUser.ts";

export interface IDummyJsonUsersResponse{
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}