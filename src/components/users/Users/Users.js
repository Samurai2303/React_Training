import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {actions} from "../../../configs";
import {User} from "../User/User";
import {usersService} from "../../../services";
import {UserDetails} from "../userDetails/UserDetails";

function Users() {
    let input = useRef();

    let dispatch = useDispatch();

    useEffect(() => {
        usersService.getAll().then(({data}) => dispatch({type: actions.loadUsers, payload: data}));
    }, []);

    let users = useSelector((state) => state.usersReducer.users);

    function show(id) {
        dispatch({type: actions.getUser, payload: id});
    }

    let user = useSelector((state) => state.usersReducer.user);

    return (
        <div>
            {user ? <UserDetails user={user}/> : <div>No user selected...</div>}
            <hr/>
            <input type="number" placeholder={'user id'} ref={input}/>
            <button onClick={() => show(input.current.value)}>Show</button>
            <hr/>
            {users.length ? users.map(value => <User user={value} key={value.id}/>) : <div>Loading...</div>}
        </div>
    );
}

export {Users};
