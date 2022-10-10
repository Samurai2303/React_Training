import {JsonplaceholderHeader} from "../../components";
import {Outlet} from "react-router-dom";

function JsonplaceholderLayout() {

    return (
        <div>
            <JsonplaceholderHeader/>
            <Outlet/>
        </div>
    );
}

export {JsonplaceholderLayout};
