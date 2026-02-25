import {useEffect, useState} from "react";
import type {CommentModel} from "../models/coment-model.ts";
import {CommentComponent} from "../CommentComponent/comment-component.tsx";
import './coment-components.css'

export const CommentComponents=()=>
{
    const[comments,setComment]=useState<CommentModel[]>([]);
    useEffect(() =>
    {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then((response:CommentModel[])=>setComment(response));
        return()=>
        {
            console.log('Done!')
        }
    }, []);

    return(
        <div className='components'>
            {comments.map((value)=>
                <CommentComponent key={value.id} {...value}/>
            )}
        </div>
    )
}