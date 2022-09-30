import {NavLink, useNavigate} from "react-router-dom";
import css from './header.module.css';

function Header() {
    let navigate = useNavigate();

    return (
        <div className={css.wrap}>
            <div className={css.navLinks}>
                <div>
                    <button onClick={()=>navigate(-1)}>Prev</button>
                    <button onClick={()=>navigate(1)}>Next</button>
                </div>
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/about'}>About</NavLink>
            </div>

        </div>
    );
}

export {Header};
