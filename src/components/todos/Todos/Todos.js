import {useDispatch, useSelector} from "react-redux";
import {Todo} from "../Todo/Todo";
import {useEffect} from "react";
import {todosActions} from "../../../redux";

function Todos() {

    let dispatch = useDispatch();
    let {todos, todosLoading, todosError} = useSelector(state => state.todosReducer);

    useEffect(() => {
        dispatch(todosActions.getAll());
    }, []);

    return (
        <div>
            {todosLoading && <div>Loading todos...</div>}
            {todosError && <div>Error(</div>}
            {todosLoading ? false : todosError ? false : todos.length ?
                todos.map((value, index) => <Todo todo={value} key={index}/>) : <div>Have no todos</div>}
        </div>
    );
}

export {Todos};
