import './App.css'
import {coursesAndDurationArray} from "./data/arrays-2.ts";
import type {CoursesModel} from "./model/courses_model.ts";

function App()
{

  return(
    <>
      <ul>{coursesAndDurationArray.map((value:CoursesModel,index:number) =><li key={index}>{value.title}, {value.monthDuration}</li>)}</ul>
    </>
  )
}

export default App
