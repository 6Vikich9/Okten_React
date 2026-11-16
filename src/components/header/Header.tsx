import { Logo } from "./Logo";
import {Toolbar} from "./Toolbar";

const NAV_ITEMS = ["Головна", "Статті", "Про нас"];

export function Header()
{
    return (
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3.5 dark:border-slate-700 dark:bg-slate-900">
            <Logo />
            <Toolbar items={NAV_ITEMS} />
        </header>
    );
}