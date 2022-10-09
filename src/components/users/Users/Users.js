import {User} from "../User/User";

function Users({users}) {

  return (
      <div>
          {users.length?users.map(value => <User user={value} key={value.id}/>):<div>Have no users</div>}
      </div>
  );
}

export {Users};
