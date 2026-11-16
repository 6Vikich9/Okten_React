import { useTheme } from "../../hooks/useTheme";

export function ThemeToggleButton()
{
    const { mode, toggleTheme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            aria-label="Змінити тему"
            className="cursor-pointer rounded-lg bg-blue-600 px-3.5 py-2 font-semibold text-white dark:bg-blue-400 dark:text-slate-900"
        >
            {mode === "light" ? "🌙 Темна тема" : "☀️ Світла тема"}
        </button>
    );
}