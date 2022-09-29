import {NavLink, Outlet} from "react-router-dom";
import {urls} from "../../configs";
import css from './header.module.css';

function Header() {

  return (
      <div>
          <div className={css.header}>
          <button>Prev</button>
          <button>Next</button>
          <NavLink to={''}>Home</NavLink>
          <NavLink to={urls.users}>Users</NavLink>
          <NavLink to={urls.posts}>Posts</NavLink>
          <NavLink to={urls.comments}>Comments</NavLink>
          <NavLink to={urls.albums}>Albums</NavLink>
          <NavLink to={urls.photos}>Photos</NavLink>
          <NavLink to={urls.todos}>Todos</NavLink>
          </div>
          <Outlet/>

      </div>
  );
}

export {Header};
