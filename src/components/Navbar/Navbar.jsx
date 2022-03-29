import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink} data-text="Pofile">Profile</NavLink>
            </div>

            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink} data-text="Messages">Messages</NavLink>
            </div>
            
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/users" activeClassName={s.activeLink} data-text="Users">Users</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink} data-text="News">News</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink} data-text="Music">Music</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink} data-text="Settings">Settings</NavLink>
            </div>

            <div>
                .
            </div>

            <div>
                .
            </div>

            <div className={s.item}>
                <NavLink to='/friends' activeClassName={s.activeLink} data-text="Friends">Friends</NavLink>
            </div>

        </nav>
    );
}

export default Navbar;