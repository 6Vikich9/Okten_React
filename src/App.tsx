import './App.css';
import {Link, Outlet} from "react-router";

function App()
{
  return (
      <>
        <nav>
          <Link to="/users">users</Link> | <Link to="/posts">posts</Link> | <Link
            to="/comments">comments</Link> | <Link to="/complex">complex</Link>
        </nav>
        <Outlet/>
      </>
  );
}

export default App
