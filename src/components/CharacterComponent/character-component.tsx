import type {Simpsons_model} from "../../model/simpsons_model.ts";
import type {ReactNode} from "react";
import "./character-component.css"

interface CharacterComponentProps
{
    item:Simpsons_model,
    children: ReactNode,
}

export const CharacterComponent =({item, children}:CharacterComponentProps)=>
{
    return(
        <div className='character'>
            <h1>{item.name} {item.surname}</h1>
            <p> Age: {item.age}</p>
            <p> Info about: {children}</p>
            <img src={item.photo} alt={item.name} className='character-photo'/>
        </div>
    )
}