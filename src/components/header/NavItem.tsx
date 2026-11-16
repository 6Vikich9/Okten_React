export function NavItem({ label }: { label: string })
{

    return (
        <a href="#" onClick={(e) => e.preventDefault()}>
            {label}
        </a>
    );
}