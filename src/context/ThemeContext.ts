import { createContext } from "react";
export type ThemeMode = "light" | "dark";

export interface IThemeContext
{
    mode: ThemeMode;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);