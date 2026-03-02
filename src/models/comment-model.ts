import type {UserModel} from "./user-model.ts";

export interface CommentModel
{
    id:number;
    body:string;
    postId:number;
    likes:number;
    user:UserModel;

}
