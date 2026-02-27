import type {Post_model} from "../model/post-model.ts";
import type {PostResponseModel} from "../model/post-response-model.ts";


const endpointPosts=import.meta.env.VITE_API_URL + '/posts'

const loadPosts = async (): Promise<Post_model[]> =>
{
    const response:PostResponseModel=await fetch(endpointPosts)
        .then(value => value.json());

    return response.posts;
}

export {loadPosts}