export interface IPost {
    reactions: Reactions;
    id:        number;
    title:     string;
    body:      string;
    userId:    number;
    views:     number;
    tags:      string[];
}

export interface Reactions {
    dislikes: number;
    likes:    number;
}
