import {useNavigate} from "react-router-dom";
import {localUrls} from "../../configs";

function MainHomePage() {

    let navigate = useNavigate();

    return (
        <div>
            <div onClick={() => navigate(localUrls.jsonplaceholder)}>Jsonplaceholder</div>
            <div onClick={() => navigate(localUrls.carsApi)}>Cars Api</div>
        </div>
    );
}

export {MainHomePage};
