import {useEffect, useState} from "react";
import {usersService} from "../../../services/users.service";
import {User} from "../User/User";

function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data));
    }, []);


    return (
        <div>
            {users.length===0?<div>Loading...</div>:users.map((value, index) => <User user={value} key={index}/>)}
        </div>
    );
}

export {Users};
