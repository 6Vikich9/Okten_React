import {useEffect, useState} from "react";
import type {Post_model} from "../../model/post-model.ts";
import {loadPosts} from "../../service/api.service.ts";
import {PostComponent} from "../PostComponent/post-component.tsx";
import './post-components.css'

export const PostComponents=()=>
{
    const[posts,setPosts]=useState<Post_model[]>([]);

    useEffect(()=>
    {

        async function fetchPosts()
        {
            const allPost = await loadPosts();
            setPosts(allPost);
        }

        fetchPosts();

    },[])

    return(
        <div className='components'>
            {posts.map((value)=>
                <PostComponent key={value.id} {...value} />
            )}
        </div>
    )
};