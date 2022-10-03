import {useContext, useEffect, useState} from "react";
import {usersService} from "../../../services";
import {User} from "../User/User";
import {UserForm} from "../userForm/UserForm";
import {Context} from "../../../index";

function Users() {
    let [users, setUsers] = useState([]);

    let context = useContext(Context);
    context.setUsers = setUsers;

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data));
    }, []);

    return (
        <div>
            {users.length===0?<div>Loading...</div>:users.map((value, index) => <User user={value} key={index}/>)}
            <UserForm/>
        </div>
    );
}

export {Users};
