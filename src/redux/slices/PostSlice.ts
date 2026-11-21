// Тип поста (import type — тільки для TS, у JS не потрапляє)
import type {IPost} from "../../models/iPost.ts";
// createAsyncThunk — асинхронна дія; createSlice — шматок стану; PayloadAction — тип дії з даними
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

// Тип стану слайсу: тільки масив постів
type PostSliceType =
{
    posts: IPost[]
}

// Початковий стан: постів ще немає
const initPostSliceState: PostSliceType = {posts: []};

/* loadPosts — завантаження постів. 'loadPosts' — унікальний префікс типу дії (дає 'loadPosts/fulfilled' і т.д.).
   Той самий префікс не можна використовувати в іншому thunk-у — інакше слайси почнуть брати дані одне одного.
   async (_, thunkAPI): "_" — аргумент дії, не потрібен (викликаємо loadPosts() без аргументів); thunkAPI — допоміжні методи */
const loadPosts = createAsyncThunk('loadPosts', async (_, thunkAPI) =>
{
    // GET /posts. <IPost[]> — очікуємо масив постів
    const posts = await getAll<IPost[]>('/posts');
    console.log(posts);
    // Віддаємо posts як payload успішної дії 'loadPosts/fulfilled' (еквівалент return posts)
    return thunkAPI.fulfillWithValue(posts);

});

/* postSlice — стан про пости. reducers: {} — власних редʼюсерів немає.
   У extraReducers слухаємо тільки loadPosts.fulfilled. Дій pending і rejected немає, тож якщо запит упаде,
   posts залишиться [] і помилка ніде не буде оброблена */
export const postSlice = createSlice(
{
    name: 'postSlice',
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: builder => builder
        // PayloadAction<IPost[]> — у action.payload лежить масив постів
        .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) =>
        {
            // Заміна масиву постів у сторі на отриманий з сервера (мутація безпечна завдяки Immer)
            state.posts = action.payload;
        }),

});

// Об'єкт для використання в компонентах: postAction.loadPosts(). Назва postAction (в однині) — як у проєкті, імпорти на неї посилаються
export const postAction =
{
    ...postSlice.actions, loadPosts
}