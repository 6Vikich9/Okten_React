import axios from 'axios';
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import  {retriveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

// Які дані потрібні для входу
type LoginData =
    {
        username: string;
        password: string;
        expiresInMins: number
    }

/* Створюємо свій axios з налаштуванням, до кожного запиту автоматично додається baseURL
   Н-д, '/login' стане https://dummyjson.com/auth/login */
const axiosInstance = axios.create(
{
    baseURL: 'https://dummyjson.com/auth',
    // Заголовки
    headers: {}
});


// Інтерцептор — функція, яка спрацьовує перед кожним запитом і може його змінити
axiosInstance.interceptors.request.use((requestObject) =>
{
    /* Токен додаємо тільки до GET-запитів. Причина: товари (GET) потребують токен,
       а при логіні (POST) токена ще немає, і при refresh (POST) він теж не потрібен */
    // ?. потрібен, бо method може бути undefined. Без нього .toUpperCase() дав би помилку
    // toUpperCase() — щоб 'get' і 'GET' порівнювались однаково
    if (requestObject.method?.toUpperCase() === 'GET')
    {
        // Беремо accessToken з localStorage і кладемо в заголовок Authorization
        // Беремо щоразу заново, щоб після refresh використовувався вже новий токен
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    /* Обов'язково повертаємо запит. Інтерцептор — це етап по дорозі до сервера,
       і якщо нічого не повернути, далі піде undefined і запит не відправиться.
       Повертаємо і тоді, коли це не GET, щоб такі запити теж проходили */
    return requestObject;

})


// Вхід на сайт
/* ({username, password, expiresInMins}: LoginData) — деструктуризація: функція отримує один об'єкт
   і відразу розкладає його на три змінні. Після двокрапки вказано тип цього об'єкта */
// Promise<IUserWithTokens> — функція async, тому повертає проміс з даними користувача
export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> =>
{

    /* post<IUserWithTokens> — в <> вказуємо тип даних, які прийдуть від сервера. Це лише для TypeScript,
       щоб були підказки. '/login' — адреса, а другий аргумент — що відправляємо серверу */
    // {data: userWithTokens} — axios повертає великий об'єкт відповіді, а нам потрібне тільки поле data
    // Записуємо його в змінну з іншою назвою userWithTokens, щоб було зрозуміло, що там лежить
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    // localStorage вміє зберігати тільки рядки, тому об'єкт спочатку перетворюємо в рядок через JSON.stringify
    // Інакше збережеться "[object Object]". Назад в об'єкт його повертає JSON.parse в helpers.ts
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

// Завантаження товарів. Повертає масив товарів.
export const loadAuthProducts = async (): Promise<IProduct[]> =>
{
    // Відповідь сервера виглядає так: { data: { total, skip, limit, products: [...] }, ... }
    /* {data: {products}} — деструктуризація:
       - заходимо в поле data;
       - з нього беремо тільки products
       Змінної data при цьому не створюється, є лише products.
       Те саме без деструктуризації: const products = response.data.products */
    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products');

    return products;
}


// Оновлення токенів, коли accessToken протермінувався
export const refresh = async () =>
{
    // Беремо користувача з localStorage, там лежить refreshToken
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    // Відправляємо refreshToken на сервер і з відповіді відразу беремо два нові токени (така сама вкладена деструктуризація, як зверху)
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh',
        {
            refreshToken: iUserWithTokens.refreshToken,
            expiresInMin: 1
        });
    // Замінюємо старі токени на нові і знову зберігаємо користувача в localStorage
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));


}