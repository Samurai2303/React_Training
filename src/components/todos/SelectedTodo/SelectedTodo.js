import {useDispatch, useSelector} from "react-redux";
import {todosActions} from "../../../redux";

function SelectedTodo() {

    let dispatch = useDispatch();
    let {selectedTodo} = useSelector(state => state.todosReducer);

    return (
        <div>
            {selectedTodo && <div>
                <div>
                    <h3>ID - {selectedTodo.id} <br/> User ID - {selectedTodo.userId}</h3>
                    <p>Title - {selectedTodo.title} <br/>
                        Completed - {selectedTodo.completed ? <span>Yes</span> : <span>No</span>}</p>
                </div>
                <div onClick={() => dispatch(todosActions.selectTodo(null))}>Close</div>
            </div>}
        </div>
    );
}

export {SelectedTodo};
