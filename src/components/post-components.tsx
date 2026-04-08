import type {IPost} from "../models/post-model.ts";

interface Props {
    post:IPost
}

const PostComponent = ({ post }:Props) => {
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostComponent;