import {useEffect, useState} from "react";
import {todosService} from "../../../services";
import {Todo} from "../Todo/Todo";

function Todos() {
    let [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos(data));
    }, []);

    return (
        <div>
            {todos.length ? todos.map((value, index) => <Todo todo={value} key={index}/>) : <div>Loading...</div>}
        </div>
    );
}

export {Todos};
