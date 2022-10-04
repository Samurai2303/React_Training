import {useNavigate} from 'react-router-dom';

import css from './header.module.css';

function Header() {

    let navigate = useNavigate();

  return (
      <div className={css.header}>
          <button className={css.buttons} onClick={()=>navigate('/register')}>Register</button>
          <button className={css.buttons} onClick={()=>navigate('/login')}>Login</button>
      </div>
  );
}

export {Header};
