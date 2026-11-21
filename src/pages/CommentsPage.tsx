// Типізовані redux-хуки
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
// useEffect — для запиту після першого рендеру
import {useEffect} from "react";
// commentActions.loadComments — thunk завантаження коментарів
import {commentActions} from "../redux/slices/CommentSlice.ts";
// Тип коментаря (тільки для TS)
import type {IComment} from "../models/IComment.ts";

/* Сторінка /comments. Функціональний компонент без props: ззовні нічого не отримує */
export const CommentsPage = () =>
{
    // dispatch — відправка дій у стор
    const dispatch = useAppDispatch();
    /* Масив коментарів зі стору.
       commentStoreSlice — так названо ключ у store.ts */
    const comments = useAppSelector(state => state.commentStoreSlice.comments);
    useEffect(() =>
    {
        // Запускаємо завантаження коментарів. Якщо запит упаде — список залишиться порожнім, помилка не обробляється
        dispatch(commentActions.loadComments());
        // [] — ефект виконується один раз після першого показу сторінки
    }, []);
    return (
        /* Для кожного коментаря — <div> з його назвою. (comment: IComment) — тип елемента. key={comment.id} — унікальний ключ для React */
        <>
            {comments.map((comment: IComment) => (<div key={comment.id}> {comment.name}</div>))}
        </>
    );
};