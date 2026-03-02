import type {CommentModel} from "../../models/comment-model.ts";
import type {FC} from "react";
import "./comment-component.css"

export const CommentComponent:FC<CommentModel> = ({body,likes,user}:CommentModel)=>
{
    return(
        <div className='component'>
            <h2>{user.fullName}</h2>
            <h3>{body}</h3>
            <p>Likes:{likes}</p>
        </div>
    )
}