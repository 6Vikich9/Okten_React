import {simpsons} from "../../data/arrays-2.ts";
import {CharacterComponent} from "../CharacterComponent/character-component.tsx";
import type {Simpsons_model} from "../../model/simpsons_model.ts";
import "./family-component.css"


export const FamilyComponent =()=>
{
    return(
        <div className='family'>
            {
                simpsons.map((value:Simpsons_model, index:number) =>
                    <CharacterComponent key={index} item={value}>
                        {value.info}
                    </CharacterComponent>
                )
            }

        </div>
    );
}