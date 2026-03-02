import type {Todos_model} from "./todos-model.ts";

export interface TodosResponseModel
{
    todos:Todos_model[];
    skip:number;
    total:number;
    limit:number;
}