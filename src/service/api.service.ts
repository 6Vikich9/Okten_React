import type {CommentModel} from "../models/comment-model.ts";
import type {CommentResponseModel} from "../models/comment-response-model.ts";

const endpointComments=import.meta.env.VITE_API_URL + '/comment'

const loadComments = async (): Promise<CommentModel[]> =>
{
    const response:CommentResponseModel=await fetch(endpointComments)
        .then(value => value.json());

    return response.comments;
}

export {loadComments}