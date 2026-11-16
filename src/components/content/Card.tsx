import { CardBody } from "./CardBody";
import type { ICard } from "../../models/ICard";

interface IProps extends ICard
{
    likes: number;
    onLike: (id: string) => void;
}

export function Card({ id, title, text, task, answer, hint, accepted, likes, onLike }: IProps)
{
    return (
        <article className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
            <h4 className="mb-2 font-bold">{title}</h4>
            <CardBody
                text={text}
                task={task}
                answer={answer}
                hint={hint}
                accepted={accepted}
                likes={likes}
                onLike={() => onLike(id)}
            />
        </article>
    );
}
