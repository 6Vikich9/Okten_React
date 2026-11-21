// useEffect — дії після рендеру (донаповнення стору); useMemo — кешування обчислення, щоб не перераховувати його на кожному рендері
import {useEffect, useMemo} from "react";
// Типізовані redux-хуки
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
// Thunk-и завантаження: юзери, пости, коментарі
import {userActions} from "../redux/slices/UserSlice.ts";
import {postAction} from "../redux/slices/PostSlice.ts";
import {commentActions} from "../redux/slices/CommentSlice.ts";

/* Сторінка /complex: юзер + його пости + коментарі до кожного поста.
   Дані беремо ЗІ СТОРУ, а не тягнемо щоразу з API. Якщо в сторі чогось бракує (юзер не відвідав /users, /posts, /comments),
   компонент сам його донаповнює — це другий варіант з умови завдання.
   Props (аргументів) немає: дужки порожні, компонент нічого ззовні не отримує */
export const ComplexPage = () =>
{
    // dispatch — відправка дій (запусків thunk-ів) у стор
    const dispatch = useAppDispatch();
    /* Вкладена деструктуризація: useAppSelector(state => state) повертає ВЕСЬ стан,
       а зліва ми одразу дістаємо з нього три масиви й даємо їм короткі імена:
       {commentStoreSlice: {comments}} -> змінна comments; {userStoreSlice: {users}} -> users; {postStoreSlice: {posts}} -> posts.
       Самі змінні commentStoreSlice, userStoreSlice, postStoreSlice при цьому не створюються.
       Типи виводяться з форми стору, тому вручну їх не описуємо.
       Зауваження: селектор бере весь стан, тож компонент перемальовується при будь-якій зміні в сторі; для трьох слайсів це нормально */
    const {commentStoreSlice: {comments}, userStoreSlice: {users}, postStoreSlice: {posts}} =
        useAppSelector(state => state);

    useEffect(() =>
    {
        /* Ефект виконується один раз після першого показу сторінки і перевіряє, чого бракує.
           Сценарій 1: користувач вже бував на /users, /posts, /comments — масиви заповнені, !length === false, і запитів немає (беремо все зі стору).
           Сценарій 2: зайшли одразу на /complex (або оновили сторінку) — масиви порожні, тож запускаємо потрібні thunk-и.
           Кожна перевірка незалежна: завантажується тільки те, чого справді немає.
           Успіх: дані потрапляють у стор -> змінюються users/posts/comments -> компонент перемальовується.
           Помилка запиту: нічого не записується й ніде не обробляється, тому сторінка залишиться на "Loading..." (повторної спроби немає) */
        if (!users.length) dispatch(userActions.loadUsers());
        if (!posts.length) dispatch(postAction.loadPosts());
        if (!comments.length) dispatch(commentActions.loadComments());
        // [] — запуск лише один раз; значення users/posts/comments у цьому ефекті — ті, що були при першому рендері
    }, []);

    /* useMemo(функція, [залежності]) — рахує структуру "юзер -> пости -> коментарі" і запамʼятовує результат.
       Перераховується тільки коли змінився users, posts або comments (масив залежностей в кінці).
       Для кожного юзера (users.map) повертаємо об'єкт {user, posts}: */
    const data = useMemo(() => users.map(user => (
    {
        // Скорочений запис user: user — сам юзер
        user,
        // Пости саме цього юзера: filter лишає ті, в яких userId дорівнює id юзера. Далі для кожного такого посту (map) збираємо {post, comments}
        posts: posts
            .filter(post => post.userId === user.id)
            .map(post => (
            {
                // Сам пост
                post,
                // Коментарі саме цього посту: filter за звʼязком comment.postId === post.id
                comments: comments.filter(comment => comment.postId === post.id),
            })),
    })), [users, posts, comments]);

    /* Поки хоч щось із трьох ще не завантажено, показуємо "Loading..." і виходимо з компонента (ранній return).
       Це потрібно, бо інакше на першому рендері (коли масиви порожні) ми намалювали б порожню сторінку.
       Хуки (useEffect, useMemo) стоять ВИЩЕ цього return навмисно: хуки не можна викликати після умовного return */
    if (!users.length || !posts.length || !comments.length)
    {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {/* ({user, posts}) — деструктуризація елемента data; змінна posts тут "затінює" зовнішню posts і означає пости саме цього юзера.
                key={user.id} — унікальний ключ секції для React */}
            {data.map(({user, posts}) => (
                <section key={user.id}>
                    {/* Номер і імʼя юзера */}
                    <h2>{user.id}. {user.name}</h2>
                    <ul>
                        {/* ({post, comments}) — деструктуризація; comments тут — коментарі саме цього посту */}
                        {posts.map(({post, comments}) => (
                            <li key={post.id}>
                                {/* Заголовок посту */}
                                <h3>{post.title}</h3>
                                <ul>
                                    {/* Список назв коментарів цього посту. Тип comment виводиться з IComment автоматично */}
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
