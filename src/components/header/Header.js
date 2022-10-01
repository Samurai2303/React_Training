import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {urls} from "../../configs";
import css from './header.module.css';

function Header() {
    let navigate = useNavigate();

  return (
      <div>
          <div className={css.header}>
          <button onClick={()=>navigate(-1)}>Prev</button>
          <button onClick={()=>navigate(1)}>Next</button>
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
