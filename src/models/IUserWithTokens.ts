// Дані, які приходять при вході: інформація про користувача і його токени
// Цей об'єкт ми зберігаємо в localStorage під ключем 'user'
export interface IUserWithTokens
{
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
}