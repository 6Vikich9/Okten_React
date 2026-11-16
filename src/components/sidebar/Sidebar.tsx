import { StatsPanel } from "./StatsPanel";

interface IProps
{
    total: number;
    byCard: Record<string, number>;
}

export function Sidebar({ total, byCard }: IProps)
{
    return (
        <aside className="w-60 self-start rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-bold">Статистика</h3>
            <StatsPanel total={total} byCard={byCard} />
        </aside>
    );
}