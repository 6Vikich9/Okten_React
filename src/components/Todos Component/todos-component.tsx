import type {Todos_model} from "../../models/todos-model.ts";
import type {FC} from "react";
import './todos-component.css'

export const TodosComponent:FC<Todos_model> =({todo,completed}:Todos_model)=>
{
    return(
        <div className='component'>
            <h2>{todo}</h2>
            <h3>{completed.toString()}</h3>
        </div>
    )
}