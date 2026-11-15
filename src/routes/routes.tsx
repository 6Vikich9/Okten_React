import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";


// Тут описано, яка адреса в браузері — яка сторінка
export const routes = createBrowserRouter([
    {
        // Головний маршрут "/" завжди показує MainLayout (меню зверху)
        // У children лежать сторінки, які показуються всередині MainLayout, у місці <Outlet/>.
        path: '/', element: <MainLayout/>, children: [
            // index: true — це сторінка за замовчуванням, коли адреса просто "/"
            {index: true, element: <HomePage/>},
            // адреса /login
            {path: 'login', element: <LoginPage/>},
            // адреса /auth/resources
            {path: '/auth/resources', element: <AuthResourcesPage/>},
        ]
    }
]);