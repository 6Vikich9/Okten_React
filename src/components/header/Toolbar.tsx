import { Nav } from "./Nav";
import { ThemeToggleButton } from "./ThemeToggleButton";

export function Toolbar({ items }: { items: string[] })
{
    return (
        <div className="flex items-center gap-6">
            <Nav items={items} />
            <ThemeToggleButton />
        </div>
    );
}