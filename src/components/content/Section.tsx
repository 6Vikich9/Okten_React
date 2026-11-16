import { Card } from "./Card";
import type { ISection, LikesMap } from "../../models/ICard";

interface IProps extends ISection
{
    likes: LikesMap;
    onLike: (id: string) => void;
}

export function Section({ heading, cards, likes, onLike }: IProps)
{
    return (
        <section className="mb-6">
            <h2 className="mb-5 text-2xl font-bold">{heading}</h2>
            <div className="grid gap-3">
                {cards.map((c) => (
                    <Card key={c.id} {...c} likes={likes[c.id] ?? 0} onLike={onLike} />
                ))}
            </div>
        </section>
    );
}