import {useDispatch} from "react-redux";
import {usersActions} from "../../../redux";

function User({user, indexId}) {

    let dispatch = useDispatch();

    return (
        <div>
            <h3>Id - {user.id}</h3>
            <p>Name - {user.name} <br/>
                Email - {user.email}</p>
            <button onClick={() => dispatch(usersActions.selectUser(indexId))}>Show detail info</button>
            <button onClick={() => {}}>Edit user</button>
            <button onClick={() => {}}>Delete user</button>
        </div>
    );
}

export {User};
