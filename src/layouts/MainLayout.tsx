import type { ReactNode } from "react";
import { Header } from "../components/header/Header";


export function MainLayout({ children }: { children: ReactNode })
{

    return (
        <div className="min-h-screen bg-slate-100 font-sans text-slate-800 transition-colors dark:bg-slate-950 dark:text-slate-100">
            <Header />
            {children}
        </div>
    );
}