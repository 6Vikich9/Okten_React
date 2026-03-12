import {Link, Outlet} from "react-router-dom";

const PostsPage=()=>
{
    return(
        <div>
            <ul>
                <li><Link to={'/jsonplaceholder'}>Json</Link></li>
                <li><Link to={'/dummyjson'}>Dummy</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    )
}

export default PostsPage