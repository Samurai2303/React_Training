import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {todosService} from "../../../services";
import {Todo} from "../Todo/Todo";

function UserTodos() {
    let {id} = useParams();

    let [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getTodosOfUser(id).then(({data}) => setTodos(data));
    }, [id]);

    return (
        <div>
            {todos.length ? todos.map((value, index) => <Todo todo={value} key={index}/>) : <div>Loading...</div>}

        </div>
    );
}

export {UserTodos};
