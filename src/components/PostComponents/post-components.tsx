import {useEffect, useState} from "react";
import type {Post_models} from "../../models/post-model.ts";
import {PostComponent} from "../PostComponent/post-component.tsx";
import './post-components.css'

export const PostComponents=()=>
{
    const[posts,setPost]=useState<Post_models[]>([]);
    useEffect(()=>
        {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(value => value.json())
                .then((response:Post_models[])=>setPost(response));
            return()=>
            {
                console.log('Done!');
            }
        },[]);
    return(
        <div className='components'>
            {posts.map((value)=>
                <PostComponent key={value.id} {...value} />
            )}
        </div>
    )
};