import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UsersPage from "../pages/users-page.tsx";
import PostsPage from "../pages/posts-page.tsx";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Link to="/users">Users</Link> <br></br>
                <Link to="/posts">Posts</Link>
            </div>

            <Routes>
                <Route path="/users" element={<UsersPage />} />
                <Route path="/posts" element={<PostsPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;