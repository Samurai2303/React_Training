import {useDispatch} from "react-redux";
import {todosActions} from "../../../redux";

function Todo({todo}) {

    let dispatch = useDispatch();

  return (
      <div>
          <h3>ID - {todo.id}</h3>
          <p>Title - {todo.title}</p>
          <button onClick={() => dispatch(todosActions.selectTodo(todo.id))}>Show details</button>
          <button onClick={() => {}}>Edit todo</button>
          <button onClick={() => {}}>Delete todo</button>
      </div>
  );
}

export {Todo};