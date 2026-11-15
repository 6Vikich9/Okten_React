import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";
// Сторінка, де беремо товари. Сервер показує їх тільки тому, хто має токен
export const AuthResourcesPage = () =>
{

    useEffect(() =>
    {
        //Пробуємо завантажити товари
        loadAuthProducts().then(products =>
        {
            console.log(products)
        }).catch(reason =>
        {
            // Якщо вибило помилку (скоріш за все токен протермінувався), тоді оновлюємо токени
            console.log(reason);
            refresh()
                // Після оновлення пробуємо завантажити товари ще раз
                .then(() => loadAuthProducts())
                .then(value => console.log(value))
        })
        // [] — ефект спрацьовує 1 раз, коли сторінка відкрилась. При оновленні компонента він не повторюється
    }, []);

    return (
        <>
            AuthResourcesPage
        </>
    );
};