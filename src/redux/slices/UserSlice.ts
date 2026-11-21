// import type — імпорт тільки типу: він потрібен лише для TS і повністю зникає після компіляції
import type {IUser} from "../../models/IUser.ts";
/* createAsyncThunk — створює асинхронну дію (запит до API) і автоматично генерує три стани: pending, fulfilled, rejected
   createSlice — створює "шматок" стану: початкове значення + редʼюсери + автоматично згенеровані дії
   PayloadAction — тип дії з даними (payload); type перед ним — імпорт лише типу */
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
// Наша функція GET-запиту
import {getAll} from "../../services/api.service.ts";

// Тип стану цього слайсу: об'єкт з одним полем users — масивом юзерів
type UserSliceType =
{
    users: IUser[]
}

// Початковий стан: порожній масив. Саме тому на сторінках спершу нічого немає, а потім дані зʼявляються
const initUserSliceState: UserSliceType = {users: []};

/* loadUsers — асинхронна дія завантаження юзерів.
   Перший аргумент "loadUsers" — префікс типу дії. З нього будуються типи 'loadUsers/pending', 'loadUsers/fulfilled', 'loadUsers/rejected'.
   Префікс МАЄ БУТИ УНІКАЛЬНИМ у всьому застосунку: якщо в двох thunk-ів він однаковий, їхні дії збігаються і редʼюсери обох слайсів
   починають реагувати на чужі дані (тому в PostSlice — 'loadPosts', а в CommentSlice — 'loadComments').
   Другий аргумент — функція, яка виконує сам запит, отримує (arg, thunkAPI):
   - "_" — перший параметр (аргумент, з яким викликали дію). Ми викликаємо loadUsers() без аргументів, тому він не потрібен, "_" — домовленість "не використовується"
   - thunkAPI — набір допоміжних методів (dispatch, getState, rejectWithValue, fulfillWithValue ...) */
const loadUsers = createAsyncThunk("loadUsers", async (_, thunkAPI) =>
{
    // GET /users. <IUser[]> — очікуємо масив юзерів. await чекає на відповідь сервера
    const users = await getAll<IUser[]>('/users');
    // Лог для перевірки, що дані прийшли
    console.log(users);
    /* fulfillWithValue(users) — явно кажемо "успіх" і віддаємо users як payload дії 'loadUsers/fulfilled'.
       Результат був би той самий, якби просто написати return users */
    return thunkAPI.fulfillWithValue(users);

});

/* userSlice — шматок стану про юзерів.
   - name — назва слайсу
   - initialState — початковий стан, описаний вище
   - reducers: {} — власних синхронних редʼюсерів немає (тому userSlice.actions порожній)
   - extraReducers — реакція на дії, створені ПОЗА слайсом, у нашому випадку на thunk loadUsers
   builder.addCase(дія, редʼюсер) — "коли прийде ця дія, виконай цю функцію".
   Тут слухаємо лише loadUsers.fulfilled (успішне завершення).
   Стани pending (запит іде) і rejected (помилка) НЕ оброблені: тому при помилці запиту стан просто залишиться порожнім,
   помилка нікуди не записується і користувач її не побачить (в консоль нічого не впаде: createAsyncThunk сам перехоплює виняток і перетворює на дію rejected) */
export const userSlice = createSlice(
{
    name: 'userSlice',
    initialState: initUserSliceState,
    reducers: {},
    /* (state, action: PayloadAction<IUser[]>) — редʼюсер: state — поточний стан слайсу, action.payload — дані з успішного запиту.
       <IUser[]> каже TS, що в payload лежить масив юзерів */
    extraReducers: builder => builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) =>
    {
        // Здається, що ми мутуємо стан, але так можна: всередині createSlice працює бібліотека Immer і сама створює новий незмінний стан
        // Записуємо отриманих юзерів у стор, повністю замінюючи старий масив
        state.users = action.payload;
    }),
});

/* Експортуємо все, що потрібно компонентам, в одному об'єкті: звичайні дії слайсу (...userSlice.actions, зараз їх нема) + наш thunk.
   У компоненті: dispatch(userActions.loadUsers()) */
export const userActions =
{
    ...userSlice.actions, loadUsers
};