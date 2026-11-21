// configureStore — створює redux-стор: єдине сховище стану застосунку (з вже налаштованими корисними речами за замовчуванням)
import {configureStore} from "@reduxjs/toolkit";
// Слайси — окремі "шматки" стану. З кожного беремо лише reducer - функцію, яка вміє змінювати свій шматок
import {userSlice} from "./slices/UserSlice.ts";
import {postSlice} from "./slices/PostSlice.ts";
import {commentSlice} from "./slices/CommentSlice.ts";
// useDispatch — хук для відправки дій у стор; useSelector — хук для читання даних зі стору
import {useDispatch, useSelector} from "react-redux";

/* store — наш стор. В reducer передаємо об'єкт, де ключ — назва гілки стану, значення — reducer слайсу.
   Саме ці ключі визначають форму стану: state.userStoreSlice.users, state.postStoreSlice.posts, state.commentStoreSlice.comments. */
export const store = configureStore(
{
    reducer:
    {
        userStoreSlice: userSlice.reducer,
        postStoreSlice: postSlice.reducer,
        commentStoreSlice: commentSlice.reducer,
    }
})

/* Типізовані версії хуків. Звичайні useDispatch / useSelector не знають форми нашого стору,
   тому TS не підказував би поля і не ловив помилок.
   .withTypes<T>() — вказує хук типу. typeof store.dispatch — тип dispatch нашого стору (розуміє асинхронні thunk-и).
   typeof store.getState — тип функції getState, а ReturnType<...> дістає те, що вона повертає: тип усього стану застосунку.
   У компонентах використовуємо саме ці хуки замість стандартних */
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();