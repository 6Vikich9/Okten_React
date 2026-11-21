// useEffect — хук для дій "поза рендером" (запити, підписки). Виконується після того, як компонент намальовано
import {useEffect} from "react";
// Наші типізовані хуки для redux
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
// userActions.loadUsers — thunk завантаження юзерів
import {userActions} from "../redux/slices/UserSlice.ts";
// Тип юзера (тільки для TS)
import type {IUser} from "../models/IUser.ts";

/* Сторінка /users. Це функціональний компонент.
Props (аргументів) немає: дужки порожні, нічого ззовні компонент не отримує. Тип повернення виводиться сам (JSX.Element) */
export const UsersPage = () =>
{
    // dispatch — функція, якою відправляємо дії у стор. Завдяки useAppDispatch вона знає і про асинхронні thunk-и
    const dispatch = useAppDispatch();
    /* useSelector (тут його типізована версія) читає з усього стану лише потрібну частину — масив юзерів.
       (state) => ... — функція-селектор; state має тип всього стану, тому TS підказує state.userStoreSlice.users.
       Компонент автоматично перемальовується, коли цей масив у сторі змінюється */
    const users = useAppSelector((state) => state.userStoreSlice.users);
    useEffect(() =>
    {
        /* Запускаємо завантаження юзерів: loadUsers() створює thunk, dispatch його виконує.
           Успіх: дані потрапляють у стор -> users змінюється -> компонент перемальовується зі списком.
           Помилка: нічого не відбудеться (залишиться порожній список), бо rejected ніде не оброблено */
        dispatch(userActions.loadUsers());
        // [] — масив залежностей порожній: ефект запуститься один раз, після першого показу компонента. Без нього він повторювався б після кожного рендеру
    }, []);

    return (
        // <>...</> — Fragment: обгортка без зайвого елемента в DOM
        /* users.map — для кожного юзера створюємо <div>. (user: IUser) — тип елемента масиву.
                key={user.id} — унікальний ключ, за яким React відстежує елементи списку. Пробіл перед {user.name} — частина тексту в розмітці */
        <>
            {users.map((user: IUser) => (<div key={user.id}> {user.name}</div>))}
        </>
    );
};