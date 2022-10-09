import {NavLink, Link} from "react-router-dom";

import css from './header.module.css';

function Header() {

  return (
      <div className={css.header}>
          <Link to={'/'}>Home</Link>
          <NavLink to={'/users'}>Users</NavLink>
          <NavLink to={'/posts'}>Posts</NavLink>
          <NavLink to={'/comments'}>Comments</NavLink>
      </div>
  );
}

export {Header};
