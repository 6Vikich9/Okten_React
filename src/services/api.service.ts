// Базова адреса API. Всі запити будуються як baseUrl + endpoint. Тестовий сервер з юзерами, постами і коментарями
const baseUrl = 'https://jsonplaceholder.typicode.com';

/* getAll — універсальна функція для GET-запиту за списком.
   <T> — generic (параметр типу): викликаючий сам каже, який тип даних очікує, напр. getAll<IUser[]>('/users').
   (Запис <T> у стрілочній функції можливий тільки у .ts файлах; у .tsx TS сплутав би його з JSX-тегом)
   endpoint: string — частина адреси після baseUrl, напр. '/users'.
   async — функція повертає Promise; тип його значення виводиться з return (тут T), тобто Promise<T> */
export const getAll = async <T>(endpoint: string) =>
{
/* fetch(...) — робить запит і повертає проміс з об'єктом відповіді.
   .then((response: Response) => response.json()) — коли відповідь прийшла, читаємо її тіло як JSON (це теж проміс, тому await чекає і на нього).
   Response — вбудований тип відповіді fetch. Результат (розібраний JSON) кладемо в responseResult.
   fetch не кидає помилку на HTTP-статуси 404/500 — помилка буде тільки при проблемі з мережею або якщо тіло не є JSON */
    const responseResult = await fetch(`${baseUrl}${endpoint}`).then((response: Response) => response.json());
/* "as T" — твердження типу: ми кажемо TS "вважай це типом T". Це лише підказка для компілятора, у браузері
    ніякої перевірки немає: якщо сервер віддасть інший формат, помилка вилізе пізніше, в місці використання */
    return responseResult as T;
}