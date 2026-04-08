import type {Todos_model} from "../../models/todos-model.ts";
import type {FC} from "react";
import "./todo-component.css"

export const TodoComponent:FC<Todos_model>=({userId,id,title,completed}:Todos_model)=>
{
    return(
        <div className='component'>
            <p>User ID:{userId}</p>
            <p>ID:{id}</p>
            <h3 className='title'>{title}</h3>
            <p>completed: {completed.toString()}</p>
        </div>
    )
}