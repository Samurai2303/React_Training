import {useAuth} from "../hooks";
import {Navigate, useLocation} from "react-router-dom";

function RequiredAuth({children}) {

    let {user} = useAuth();

    let location = useLocation();

    if (!user) {
        return <Navigate to={'/login'} state={location}/>;
    }


    return children;
}

export {RequiredAuth};
