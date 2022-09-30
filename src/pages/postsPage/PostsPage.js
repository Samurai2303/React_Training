import {Posts} from "../../components";
import {Outlet} from 'react-router-dom';

function PostsPage() {

    return (
        <div>
            <Outlet/>
            <Posts/>
        </div>
    );
}

export {PostsPage};
