import {useSelector} from "react-redux";

function SelectedUser() {
    let {user} = useSelector(state => state.userReducer);

    return (
        <div>
            {user && <div>
                <h3>Id - {user.id}</h3>
                <p>Name - {user.name} <br/>
                    Username - {user.username} <br/>
                    Email - {user.email}</p>
            </div>}
        </div>
    );
}

export {SelectedUser};
