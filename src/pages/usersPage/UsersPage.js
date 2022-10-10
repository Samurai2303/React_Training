import {SelectedUser, UserForm, Users} from "../../components";
import css from './usersPage.module.css';

function UsersPage() {

    return (
        <div className={css.wrap}>
            <Users/>
            <SelectedUser/>
            <UserForm/>
        </div>
    );
}

export {UsersPage};
