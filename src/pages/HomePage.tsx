import { useCallback, useState } from "react";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Content } from "../components/content/Content";
import { sections } from "../data/sections";
import type { LikesMap } from "../models/ICard";

export function HomePage()
{
    const [likes, setLikes] = useState<LikesMap>({});

    const handleLike = useCallback((id: string) =>
    {
        setLikes((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    }, []);

    const total = Object.values(likes).reduce((a, b) => a + b, 0);
    const byCard = Object.fromEntries(
        sections.flatMap((s) => s.cards).map((c) => [c.title, likes[c.id] ?? 0])
    );

    return (
        <main className="flex gap-6 p-6">
            <Sidebar total={total} byCard={byCard} />
            <Content sections={sections} likes={likes} onLike={handleLike} />
        </main>
    );
}