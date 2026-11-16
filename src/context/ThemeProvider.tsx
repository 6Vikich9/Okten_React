import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import type { ThemeMode } from "./ThemeContext";


export function ThemeProvider({ children }: { children: ReactNode })
{
    const [mode, setMode] = useState<ThemeMode>("light");

    const toggleTheme = useCallback(
        () => setMode((m) => (m === "light" ? "dark" : "light")),
        []
    );

    const value = useMemo(
        () => ({ mode, toggleTheme }),
        [mode, toggleTheme]
    );

    useEffect(() =>
    {
        document.documentElement.classList.toggle("dark", mode === "dark");
    }, [mode]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}