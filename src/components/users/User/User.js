function User({user}) {

  return (
      <div>
          <h3>Id - {user.id}</h3>
          <p>Name - {user.name} <br/>
          Email - {user.email}</p>
      </div>
  );
}

export {User};
