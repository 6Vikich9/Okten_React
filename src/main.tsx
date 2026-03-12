import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layout/main-layout.tsx";
import HomePage from "./pages/home-page.tsx";
import UsersPage from "./pages/users-page.tsx";
import PostsPage from "./pages/posts-page.tsx";
import CommentsPage from "./pages/comments-page.tsx";
import JsonPlaceholderPage from "./pages/jsonplaceholder-page.tsx";
import DummyJsonPage from "./pages/dummyJson-page.tsx";

function ProductsPage() {
    return null;
}

const router=createBrowserRouter(
    [
        {path:'/', element:<MainLayout/>,
            children:
                [
                    {path:'',element:<HomePage/>},
                    {path:'users', element:<UsersPage/>,
                        children:
                        [
                            {path:'jsonplaceholder', element:<JsonPlaceholderPage/>},
                            {path:'dummyjson', element:<DummyJsonPage/>},
                        ]
                    },
                    {path:'posts', element:<PostsPage/>,
                        children:
                            [
                                {path:'jsonplaceholder', element:<JsonPlaceholderPage/>},
                                {path:'dummyjson', element:<DummyJsonPage/>},
                            ]
                    },

                    {path:'comments', element:<CommentsPage/>,
                        children:
                        [
                            {path:'jsonplaceholder', element:<JsonPlaceholderPage/>},
                        ]
                    },
                    {path:'products', element:<ProductsPage/>},
                ]
        },
    ]
)

createRoot(document.getElementById('root')!)
    .render(
        <RouterProvider router={router}/>
    )
