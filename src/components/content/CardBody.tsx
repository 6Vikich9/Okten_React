import { useRef, useState } from "react";
import { LikeButton } from "./LikeButton";

interface IProps
{
    text: string;
    task: string;
    answer: string;
    hint: string;
    accepted?: string[];
    likes: number;
    onLike: () => void;
}

type CheckResult = "ok" | "wrong" | null;

const SECONDARY_BTN =
    "cursor-pointer rounded-lg border border-slate-300 px-3 py-1.5 text-slate-600 dark:border-slate-600 dark:text-slate-300";

const normalize = (s: string) =>
    s.toLowerCase()
        .replace(/\s+/g, "")
        .replace(/−/g, "-")
        .replace(/х/g, "x")
        .replace(/у/g, "y")
        .replace(/,/g, ".");

const splitParts = (s: string) =>
    s.toLowerCase()
        .split(/або|;|,(?!\d)|(?<!\d),/)
        .map(normalize)
        .filter((p) => p !== "")
        .sort();

const sameParts = (a: string[], b: string[]) =>
    a.length === b.length && a.every((p, i) => p === b[i]);

function isCorrect(input: string, answer: string, accepted: string[] = [])
{
    const user = splitParts(input);
    if (user.length === 0) return false;

    if ([answer, ...accepted].some((c) => sameParts(user, splitParts(c)))) return true;

    const main = splitParts(answer);
    return main.length === 1 && user.length === 1 && main[0].endsWith("=" + user[0]);
}

export function CardBody({ text, task, answer, hint, accepted, likes, onLike }: IProps)
{
    const [showTask, setShowTask] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");
    const [result, setResult] = useState<CheckResult>(null);
    const [attempts, setAttempts] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const toggleTask = () =>
    {
        setShowTask((prev) => !prev);
        setShowAnswer(false);
        setUserAnswer("");
        setResult(null);
        setAttempts(0);
    };

    const handleCheck = () =>
    {
        if (userAnswer.trim() === "") return;

        const ok = isCorrect(userAnswer, answer, accepted);
        setResult(ok ? "ok" : "wrong");

        if (!ok)
        {
            setAttempts((n) => n + 1);
            inputRef.current?.select();
        }
    };

    return (
        <div>
            <p className="mb-4 text-slate-500 dark:text-slate-400">{text}</p>

            {showTask && (
                <div className="mb-4 rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                    <p className="font-semibold">Завдання: {task}</p>

                    <div className="mt-2 flex gap-2">
                        <input
                            ref={inputRef}
                            value={userAnswer}
                            onChange={(e) =>
                            {
                                setUserAnswer(e.target.value);
                                setResult(null);
                            }}
                            onKeyDown={(e) => e.key === "Enter" && handleCheck()}
                            placeholder={hint}
                            className={`flex-1 rounded-lg border bg-white px-3 py-1.5 dark:bg-slate-900 ${
                                result === "wrong"
                                    ? "border-red-500"
                                    : "border-slate-300 dark:border-slate-600"
                            }`}
                        />
                        <button onClick={handleCheck} className={SECONDARY_BTN}>
                            Перевірити
                        </button>
                    </div>

                    {result === "ok" && (
                        <p className="mt-2 text-green-600 dark:text-green-400">✓ Правильно!</p>
                    )}
                    {result === "wrong" && (
                        <p className="mt-2 text-red-600 dark:text-red-400">✗ Спробуй ще раз!{attempts >= 3 && " Не виходить? Натисни «Показати відповідь»."}
                        </p>
                    )}

                    {showAnswer ? (
                        <p className="mt-2 text-blue-600 dark:text-blue-400">Відповідь: {answer}</p>
                    ) : (
                        <button onClick={() => setShowAnswer(true)} className={`${SECONDARY_BTN} mt-2`}>
                            Показати відповідь
                        </button>
                    )}
                </div>
            )}

            <div className="flex gap-2">
                <LikeButton count={likes} onLike={onLike} />
                <button onClick={toggleTask} className={SECONDARY_BTN}>
                    {showTask ? "Сховати завдання" : "Показати завдання"}
                </button>
            </div>
        </div>
    );
}
