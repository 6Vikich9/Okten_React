import type {FC} from "react";
import type {CommentModel} from "../models/coment-model.ts";
import './coment-component.css'

export const CommentComponent:FC<CommentModel>=({postId, id, name, email, body}:CommentModel)=>
{
    return(
        <div className='component'>
            <p>Post ID: {postId}</p>
            <p>ID:{id}</p>
            <h2>{name}</h2>
            <p>{email}</p>
            <h3>{body}</h3>
        </div>
    )
}