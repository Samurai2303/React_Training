import {Users} from "../../components";
import {Outlet} from 'react-router-dom';

function UsersPage() {

    return (
        <div>
            <Outlet/>
            <Users/>
        </div>
    );
}

export {UsersPage};
