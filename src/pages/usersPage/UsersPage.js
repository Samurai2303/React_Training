import {NewFormBtn, SelectedUser, UserForm, Users} from "../../components";
import css from './usersPage.module.css';
import {useDispatch, useSelector} from "react-redux";
import {usersActions} from "../../redux";

function UsersPage() {

    let dispatch = useDispatch();
    let {newUserForm} = useSelector(state => state.usersReducer);

    return (
        <div className={css.wrap}>
            <Users/>
            <SelectedUser/>
            {newUserForm && <UserForm/>}
            {!newUserForm && <NewFormBtn onClick={() => dispatch(usersActions.toggleForm())}>Create new user</NewFormBtn>}
        </div>
    );
}

export {UsersPage};
