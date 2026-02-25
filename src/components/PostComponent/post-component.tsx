import type {Post_models} from "../../models/post-model.ts";
import type {FC} from "react";
import './post-component.css'

export const PostComponent:FC<Post_models>=({userId,id,title,body}:Post_models)=>
{
    return(
        <div className='component'>
            <p>User ID:{userId}</p>
            <p>ID:{id}</p>
            <h2>{title}</h2>
            <h3>{body}</h3>
        </div>
    )
}