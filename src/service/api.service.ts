import type {Todos_model} from "../models/todos-model.ts";
import type {TodosResponseModel} from "../models/todos-response-model.ts";

const endpointTodos=import.meta.env.VITE_API_URL + '/todos'

const loadTodos = async (): Promise<Todos_model[]> =>
{
    const response:TodosResponseModel=await fetch(endpointTodos)
        .then(value => value.json());

    return response.todos;
}

export {loadTodos}