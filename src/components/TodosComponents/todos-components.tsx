import {useEffect, useState} from "react";
import type {Todos_model} from "../../models/todos-model.ts";
import {loadTodos} from "../../service/api.service.ts";
import {TodosComponent} from "../Todos Component/todos-component.tsx";
import "./todos-componets.css"

export const TodosComponents=()=>
{
    const [todos,setTodos]=useState<Todos_model[]>([]);

    useEffect(()=>
    {
        async function fetchTodos()
        {
            const allTodo = await loadTodos();
            setTodos(allTodo);
        }

        fetchTodos();

    },[])

    return(
        <div className='components'>
            {todos.map((value)=>
                <TodosComponent key={value.id} {...value}/>
            )}
        </div>
    )
}