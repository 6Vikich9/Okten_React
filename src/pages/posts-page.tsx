import { useEffect, useState } from "react";
import {getPosts} from "../services/posts.api.services.ts";
import PostComponent from "../components/post-components.tsx";
import type {IPost} from "../models/post-model.ts";


const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts().then(data => {
            setPosts(data);
        });
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <PostComponent key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostsPage;