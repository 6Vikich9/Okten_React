import { StatRow } from "./StatRow";

interface IProps
{
    total: number;
    byCard: Record<string, number>;
}

export function StatsPanel({ total, byCard }: IProps)
{
    return (
        <div>
            <StatRow label="Усього лайків" value={total} />
            {Object.entries(byCard).map(([title, n]) => (
                <StatRow key={title} label={title} value={n} />
            ))}
        </div>
    );
}