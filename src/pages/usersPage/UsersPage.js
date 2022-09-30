import {Button} from "../../components/button/Button";
import {useEffect, useState} from "react";
import {usersService} from "../../services/users.service";
import {User} from "../../components";

function UsersPage() {
    let [users, setUsers] = useState([]);
    let [usersE, setUsersE] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsersE(data))
    }, []);

    let onClick = () => {
        setUsers(usersE);
    }

    return (
        <div>
            <Button onClick={onClick}>Show users</Button>
            {users.length ? users.map(value => <User user={value} key={value.id}/>) : <div>Click the button...</div>}
        </div>
    );
}

export {UsersPage};
