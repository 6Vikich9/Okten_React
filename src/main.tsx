import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./Layout/main-layout.tsx";
import HomePage from "./pages/home-page.tsx";
import UsersPage from "./pages/users-page.tsx";
import PostsPage from "./pages/posts-page.tsx";
import CommentsPage from "./pages/comments-page.tsx";
import ProductsPage from "./pages/products-page.tsx";

const router=createBrowserRouter(
    [
        {path:'/', element:<MainLayout/>,
            children:
            [
                {path:'',element:<HomePage/>},
                {path:'users', element:<UsersPage/>},
                {path:'posts', element:<PostsPage/>},
                {path:'comments', element:<CommentsPage/>},
                {path:'products', element:<ProductsPage/>},
            ]
        },
    ]
)

createRoot(document.getElementById('root')!)
    .render(
        <RouterProvider router={router}/>
)
