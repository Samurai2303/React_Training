import {NavLink} from "react-router-dom";
import {localUrls} from "../../../configs";
import css from './jsonplaceholderHeader.module.css';

function JsonplaceholderHeader() {

    return (
        <div className={css.wrap}>
            <NavLink to={localUrls.users}>Users</NavLink>
            <NavLink to={localUrls.posts}>Posts</NavLink>
            <NavLink to={localUrls.comments}>Comments</NavLink>
            <NavLink to={localUrls.todos}>Todos</NavLink>
            <NavLink to={localUrls.albums}>Albums</NavLink>
            <NavLink to={localUrls.photos}>Photos</NavLink>
        </div>
    );
}

export {JsonplaceholderHeader};
