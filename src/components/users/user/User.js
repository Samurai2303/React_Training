function User({user}) {

    return (
        <div>
            <h3>Id - {user.id}</h3>
            <p>Name - {user.name} <br/>
            Username - {user.username}</p>
        </div>
    );
}

export {User};
