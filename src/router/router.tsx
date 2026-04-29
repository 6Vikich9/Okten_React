import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UsersPage from "../pages/users-page.tsx";
import CartPage from "../pages/cart-page.tsx";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Link to="/users">Users</Link> <br></br>
            </div>

            <Routes>
                <Route path="/users" element={<UsersPage />} >
                   <Route path=":id/cart" element={<CartPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;