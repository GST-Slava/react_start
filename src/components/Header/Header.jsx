import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.look.com.ua/large/201209/14249.jpg' alt='logo_gst' />

        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;