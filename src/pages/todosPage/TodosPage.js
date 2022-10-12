import {SelectedTodo, TodoForm, Todos} from "../../components";
import css from './todosPage.module.css';

function TodosPage() {

    return (
        <div className={css.wrap}>
            <Todos/>
            <SelectedTodo/>
            <TodoForm/>
        </div>
    );
}

export {TodosPage};
