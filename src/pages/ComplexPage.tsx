import {useEffect, useMemo} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {userActions} from "../redux/slices/UserSlice.ts";
import {postAction} from "../redux/slices/PostSlice.ts";
import {commentActions} from "../redux/slices/CommentSlice.ts";

export const ComplexPage = () =>
{
    const dispatch = useAppDispatch();
    const {commnetStoreSlice: {comments}, userStoreSlice: {users}, postStoreSlice: {posts}} =
        useAppSelector(state => state);

    useEffect(() =>
    {
        if (!users.length) dispatch(userActions.loadUsers());
        if (!posts.length) dispatch(postAction.loadPosts());
        if (!comments.length) dispatch(commentActions.loadComments());
    }, []);

    const data = useMemo(() => users.map(user => (
    {
        user,
        posts: posts
            .filter(post => post.userId === user.id)
            .map(post => (
            {
                post,
                comments: comments.filter(comment => comment.postId === post.id),
            })),
    })), [users, posts, comments]);

    if (!users.length || !posts.length || !comments.length)
    {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {data.map(({user, posts}) => (
                <section key={user.id}>
                    <h2>{user.id}. {user.name}</h2>
                    <ul>
                        {posts.map(({post, comments}) => (
                            <li key={post.id}>
                                <h3>{post.title}</h3>
                                <ul>
                                    {comments.map(comment => (
                                        <li key={comment.id}>{comment.name}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    );
};
