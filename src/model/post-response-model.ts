import type {Post_model} from "./post-model.ts";

export interface PostResponseModel
{
    posts:Post_model[];
    skip:number;
    total:number;
    limit:number;
}