import {useEffect, useState} from "react";
import type {CommentModel} from "../../models/comment-model.ts";
import {CommentComponent} from "../CommentComponent/comment-component.tsx";
import {loadComments} from "../../service/api.service.ts";
import './comment-components.css'

export const CommentComponents=()=>
{
    const[comments,setComment]=useState<CommentModel[]>([]);

    useEffect(()=>
    {
        async function fetchComments()
        {
            const allComment=await loadComments();
            setComment(allComment);
        }

        fetchComments();
    },[])

    return(
        <div className='components'>
            {comments.map((value)=>
                <CommentComponent key={value.id} {...value}/>
            )}
        </div>
    )
}