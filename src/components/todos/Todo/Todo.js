function Todo({todo}) {

  return (
      <div>
          <h3>User Id - {todo.userId} <br/> Id - {todo.id}</h3>
          <p>Title - {todo.title} <br/>
          Completed - {todo.completed?'True':'False'}</p>
      </div>
  );
}

export {Todo};
