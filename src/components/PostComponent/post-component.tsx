import type {FC} from "react";
import type {Post_model} from "../../model/post-model.ts";
import './post-component.css'

export const PostComponent:FC<Post_model> =({title,body}:Post_model)=>
{
    return(
        <div className='component'>
            <h2>{title}</h2>
            <h3>{body}</h3>
        </div>
    )
}