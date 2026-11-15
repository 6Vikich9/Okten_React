// Ця функція читає дані з localStorage і повертає їх як об'єкт
// <T> — це тип, який ми вкажемо при виклику (наприклад IUserWithTokens), щоб TypeScript знав, які поля є в об'єкті
export const retriveLocalStorage = <T>(key: string) =>
{
    // getItem повертає рядок або null (якщо такого ключа нема)
    // || '' замінює null на порожній рядок
    const object = localStorage.getItem(key) || '';
    /* Якщо рядок порожній, то даних немає. Тоді повертаємо порожній об'єкт,
       щоб програма не впала, коли ми візьмемо з нього поле (воно буде undefined) */
    // "as T"  кажемо TypeScript вважати цей об'єкт типом T
    if (!object)
    {
        return {} as T;
    }
    // У localStorage все лежить рядком, тому перетворюємо його назад в об'єкт через JSON.parse
    const parse = JSON.parse(object);
    return parse as T;

}