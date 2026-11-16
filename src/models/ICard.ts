export interface ICard
{
    id: string;
    title: string;
    text: string;
    task: string;
    answer: string;
    hint: string;
    accepted?: string[];
}

export interface ISection
{
    heading: string;
    cards: ICard[];
}

export type LikesMap = Record<string, number>;