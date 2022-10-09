import {useSelector} from "react-redux";

function UserFromApi() {

    let {userFromApi, loadingUser, errorUser} = useSelector(state => state.userReducer);

    return (
        <div>
            {loadingUser&&<div>Loading...</div>}
            {errorUser&&<div>Error...</div>}
            {loadingUser?false:errorUser?false:userFromApi?<div>
                <h3>Id - {userFromApi.id}</h3>
                <p>Name - {userFromApi.name} <br/>
                Email - {userFromApi.email}</p>
            </div>:<div>no user...</div>}
        </div>
    );
}

export {UserFromApi};
