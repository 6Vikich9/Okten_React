// useAppDispatch / useAppSelector — типізовані redux-хуки
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
// useEffect — хук для дій після рендеру (тут: запит)
import {useEffect} from "react";
// postAction.loadPosts — thunk завантаження постів
import {postAction} from "../redux/slices/PostSlice.ts";

/* Сторінка /posts. Функціональний компонент без props (дужки порожні — ззовні нічого не приходить) */
export const PostsPage = () =>
{
    // Функція для відправки дій у стор
    const dispatch = useAppDispatch();
    // Беремо зі стору тільки масив постів. TS підказує шлях state.postStoreSlice.posts. Зміна масиву перемальовує компонент
    const posts = useAppSelector(state => state.postStoreSlice.posts);
    useEffect(() =>
    {
        // Запускаємо завантаження постів. Успіх: масив у сторі заповнюється і список зʼявляється. Помилка: список лишиться порожнім, без повідомлення
        dispatch(postAction.loadPosts())
        // [] — ефект спрацьовує один раз після першого показу сторінки
    },[]);
    return (
        /* Для кожного посту — <div> із заголовком. Тип post TS виводить сам з масиву IPost[], тому його не описуємо. key — унікальний id посту */
        <>
            {posts.map((post) => (<div key={post.id}>{post.title}</div>))}
        </>
    );
};