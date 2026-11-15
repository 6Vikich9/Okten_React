// Два токени, які приходять від сервера при оновленні (refresh)
export interface ITokenPair
{
    accessToken: string;   // додаємо до запитів, живе недовго
    refreshToken: string;  // потрібен, щоб отримати новий accessToken
}