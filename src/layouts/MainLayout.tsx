import {Link, Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className='text-2xl'>
            <nav className='flex justify-around bg-gray-100 py-4 border-b-2'>
                <Link className='hover:text-blue-600' to='getter'>Get cars</Link>
                <Link className='hover:text-blue-600' to='setter'>Set cars</Link>
            </nav>
            <Outlet/>
        </div>
    );
};

export default MainLayout;