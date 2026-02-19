import './App.css'
import {coursesArray} from "./data/arrays-2.ts";
import {CoursesArray_component} from "./components/coursesArray_component.tsx";
import type {CoursesArray_model} from "./model/coursesArray_model.ts";

function App()
{

  return (
    <div className='wrap'>
      {coursesArray.map((value:CoursesArray_model,index:number)=><CoursesArray_component key={index} title={value.title} monthDuration={value.monthDuration} hourDuration={value.hourDuration} modules={value.modules}/>)}
    </div>
  )
}

export default App
