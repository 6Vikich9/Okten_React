import './App.css'
import {coursesTitleArray} from "./data/arrays-2.ts";

function App()
{
  return (
    <>
      <ul>{coursesTitleArray.map((value, index) => <li key={index}>{value}</li>)}</ul>
    </>
  )
}

export default App
