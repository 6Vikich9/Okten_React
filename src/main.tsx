import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/main-layout";

import HomePage from "./pages/home-page";
import UsersPage from "./pages/users-page.tsx";
import PostsPage from "./pages/posts-page.tsx";
import CommentsPage from "./pages/comments-page";
import {createRoot} from "react-dom/client";
import DataPage from "./pages/data-page.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <HomePage /> },

            {
                path: "/users",
                element: <UsersPage />,
                children: [
                    { path: ":source", element: <DataPage type="users" /> }
                ]
            },

            {
                path: "/posts",
                element: <PostsPage />,
                children: [
                    { path: ":source", element: <DataPage type="posts" /> }
                ]
            },

            {
                path: "/comments",
                element: <CommentsPage />,
                children: [
                    { path: ":source", element: <DataPage type="comments" /> }
                ]
            },
        ]
    },
]);

createRoot(document.getElementById('root')!)
    .render(
        <RouterProvider router={router}/>
    )