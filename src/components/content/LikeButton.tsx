interface IProps
{
    count: number;
    onLike: () => void;
}

export function LikeButton({ count, onLike }: IProps)
{
    return (
        <button
            onClick={onLike}
            className="cursor-pointer rounded-lg border border-blue-600 px-3 py-1.5 text-blue-600 dark:border-blue-400 dark:text-blue-400">
            ♥ {count}
        </button>
    );
}