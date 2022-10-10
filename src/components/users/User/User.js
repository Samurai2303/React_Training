import {useDispatch} from "react-redux";

import {userActions} from "../../../redux";

function User({user}) {

    let dispatch = useDispatch();

    return (
        <div>
            <h3>Id - {user.id}</h3>
            <p>Name - {user.name}</p>
            <button onClick={()=>dispatch(userActions.selectUser(user))}>Select user</button>
            <button onClick={()=>dispatch(userActions.getUserFromApi({id:user.id}))}>Get from Api</button>
            <button onClick={()=>dispatch(userActions.deleteUser(user.id))}>Delete</button>
        </div>
    );
}

export {User};
