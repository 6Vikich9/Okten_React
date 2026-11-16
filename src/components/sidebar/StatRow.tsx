interface IProps
{
    label: string;
    value: number;
}

export function StatRow({ label, value }: IProps)
{
    return (
        <div className="flex justify-between py-1.5">
            <span className="text-slate-500 dark:text-slate-400">{label}</span>
            <b>{value}</b>
        </div>
    );
}