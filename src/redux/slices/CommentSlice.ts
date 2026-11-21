// Тип коментаря (тільки для TS)
import type {IComment} from "../../models/IComment.ts";
// createAsyncThunk — асинхронна дія; createSlice — шматок стану; PayloadAction — тип дії з даними
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

// Тип стану слайсу: масив коментарів
type CommentSliceType =
{
    comments: IComment[]
}

// Початковий стан: коментарів ще немає
const initCommentSliceState: CommentSliceType = {comments: []};

/* loadComments — завантаження коментарів. Префікс 'loadComments' має бути унікальним:
   дія 'loadComments/fulfilled' повинна належати тільки цьому слайсу, щоб коментарі не потрапляли в пости і навпаки.
   "_" — аргумент дії (не використовується), thunkAPI — допоміжні методи */
const loadComments = createAsyncThunk('loadComments', async (_, thunkAPI) =>
{
    // GET /comments. <IComment[]> — очікуємо масив коментарів (їх 500 штук)
    const comments = await getAll<IComment[]>('/comments');
    console.log(comments);
    // Віддаємо comments як payload успішної дії (еквівалент return comments)
    return thunkAPI.fulfillWithValue(comments);

});

/* commentSlice — стан про коментарі. Як і в інших слайсах, оброблено лише fulfilled;
   pending і rejected немає, тому помилка запиту залишає comments порожнім без жодного повідомлення */
export const commentSlice = createSlice(
{
    name: 'commentSlice',
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadComments.fulfilled,
        // PayloadAction<IComment[]> — в action.payload лежить масив коментарів
        (state, action: PayloadAction<IComment[]>) =>
        {
            // Записуємо коментарі в стор (мутація безпечна завдяки Immer)
            state.comments = action.payload
        }),
});

// Об'єкт для компонентів: commentActions.loadComments()
export const commentActions =
{
    ...commentSlice.actions, loadComments
}