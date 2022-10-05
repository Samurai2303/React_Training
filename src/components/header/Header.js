import css from './header.module.css';
import {NavLink} from "react-router-dom";
import {urls} from "../../configs";

function Header() {

  return (
      <div className={css.header}>
          <NavLink to={urls.users}>Users</NavLink>
          <NavLink to={urls.posts}>Posts</NavLink>
          <NavLink to={urls.comments}>Comments</NavLink>
      </div>
  );
}

export {Header};
