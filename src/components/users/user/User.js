import {Context} from "../../../index";

function User({user}) {

    return (
        <div>
            <h3>Id - {user.id}</h3>
            <p>Name - {user.name} <br/>
            Username - {user.username}</p>
            <button onClick={()=>{Context.user=user}}>Save user</button>
        </div>
    );
}

export {User};
