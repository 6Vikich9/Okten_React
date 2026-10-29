import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";


export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [ // Set MainLayout as the root layout wrapper for all nested child routes[cite: 9]
            {index: true, element: <HomePage/>},
            {path: 'login', element: <LoginPage/>},
            {path: '/auth/resources', element: <AuthResourcesPage/>},
        ]
    }
]);