import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {usersActions} from "../../../redux";
import {User} from "../User/User";

function Users() {

    let {users, usersLoading, usersError} = useSelector(state => state.usersReducer);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersActions.getAll());
    }, []);

    return (
        <div>
            {usersLoading && <div>Loading users...</div>}
            {usersError && <div>Error(</div>}
            {usersLoading ? false : usersError ? false : users.length ?
                users.map((value, index) => <User user={value} indexId={index} key={index}/>) :
                <div>Have no users</div>}
        </div>
    );
}

export {Users};
