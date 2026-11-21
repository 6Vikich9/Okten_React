// createBrowserRouter — створює роутер, який працює з адресним рядком браузера (History API): /users, /posts
import {createBrowserRouter} from "react-router";
// Компонент-шаблон: меню + Outlet
import App from "../App.tsx";
// Компоненти-сторінки. Імпортуємо з {}, бо в них іменований експорт (export const ...), а не export default
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {ComplexPage} from "../pages/ComplexPage.tsx";

/* routes — наш роутер. Його віддаємо в <RouterProvider router={routes}/> у main.tsx.
   createBrowserRouter приймає масив об'єктів-маршрутів. У кожного:
   - path — частина адреси, на яку реагує маршрут
   - element — що показати
   - children — вкладені маршрути; їх вміст з'являється в <Outlet/> батька */
export const routes = createBrowserRouter([
    {
        // Батьківський маршрут "/": завжди показує App (меню), а всередині нього — активну дочірню сторінку
        path: "/", element: <App/>, children: [
            // Шлях дочірніх маршрутів без "/" на початку: він відраховується від батька, тобто 'users' = /users
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            // /complex: юзери + їхні пости + коментарі до постів
            {path: 'complex', element: <ComplexPage/>},
        ]
    }
]);