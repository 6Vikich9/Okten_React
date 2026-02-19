import type {CoursesArray_model} from "../model/coursesArray_model.ts";
import type {FC} from "react";
import "./coursesArray_component.css"

export const CoursesArray_component:FC<CoursesArray_model>=({title,monthDuration,hourDuration,modules}:CoursesArray_model)=>
{
    return(
        <div className='component'>
            <h3 className='title-component'>{title}</h3>
            <p>Month duration:{monthDuration}</p>
            <p>Hours duration:{hourDuration}</p>
            <p>Modules:</p>
            <ul>
                {
                    modules.map(value=><li>{value}</li>)
                }
            </ul>
        </div>
    )
}