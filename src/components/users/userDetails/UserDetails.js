function UserDetails({user}) {

  return (
      <div>
          <h3>Id - {user.id}</h3>
          <p>name - {user.name} <br/>
          Email - {user.email} <br/>
          Phone - {user.phone}</p>
      </div>
  );
}

export {UserDetails};
