import type {CommentModel} from "./comment-model.ts";

export  interface CommentResponseModel
{
    comments:CommentModel[];
    skip:number;
    total:number;
    limit:number;
}