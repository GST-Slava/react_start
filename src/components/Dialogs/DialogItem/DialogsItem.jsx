import React from "react";
import s from './../Dialogs.module.css';
import {Link, NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialogs + ' ' + s.active}>
            <nav>
                <Link to={path}>{props.name}</Link>
            </nav>
        </div>
    );
}

export default DialogItem;