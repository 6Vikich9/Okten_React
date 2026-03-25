import { Link, Outlet } from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>

            <ul>
                <li><Link to="jsonplaceholder">JSONPlaceholder</Link></li>
                <li><Link to="dummyjson">DummyJSON</Link></li>
            </ul>

            <Outlet />
        </div>
    );
};

export default CommentsPage;