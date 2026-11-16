import { Section } from "./Section";
import type { ISection, LikesMap } from "../../models/ICard";

interface IProps
{
    sections: ISection[];
    likes: LikesMap;
    onLike: (id: string) => void;
}

export function Content({ sections, likes, onLike }: IProps)
{
    return (
        <div className="flex-1">
            {sections.map((s) => (
                <Section key={s.heading} {...s} likes={likes} onLike={onLike} />
            ))}
        </div>
    );
}
