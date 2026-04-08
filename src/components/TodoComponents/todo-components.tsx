import type {Todos_model} from "../../models/todos-model.ts";
import {useEffect, useState} from "react";
import {TodoComponent} from "../TodoComponent/todo-component.tsx";
import "./todo-components.css"

export const TodoComponents=()=>
{
    const[todos,setTodos]=useState<Todos_model[]>([]);
    useEffect(()=>
    {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then((response:Todos_model[])=>{setTodos(response)});
        return()=>
        {
            console.log('Done!');
        }
    },[]);

    return(
        <div className='components'>
            {todos.map((value) =>
                <TodoComponent key={value.id} {...value} />
            )}
        </div>
    );
};