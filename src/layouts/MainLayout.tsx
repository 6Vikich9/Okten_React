import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";

// Layout — це спільна частина для всіх сторінок
// Меню завжди зверху, а під ним змінюється сторінка
export const MainLayout = () =>
{
    return (
        <>
            <Menu/>
            {/* Outlet — місце, куди підставляється поточна сторінка (home, login або resources) */}
            <Outlet/>
        </>
    );
};