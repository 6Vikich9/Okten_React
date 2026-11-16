import { NavItem } from "./NavItem";

export function Nav({ items }: { items: string[] })
{
    return (
        <nav className="flex gap-4">
            {items.map((i) => <NavItem key={i} label={i} />)}
        </nav>
    );
}