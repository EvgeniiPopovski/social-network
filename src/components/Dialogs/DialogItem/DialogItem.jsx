import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";
import React from "react";

const DialogItem = (props) => {
    return (
        <NavLink className={s.dialogItem} to={'/dialogs/' + props.id}> {props.name} </NavLink>
    )
}
export default DialogItem