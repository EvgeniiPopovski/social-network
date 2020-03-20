import s from "../Dialogs.module.css";
import React from "react";

const MessageItem = (props) => {
    return (
        <div className={s.messageItem}>
            {props.text}
        </div>
    )
}

export default MessageItem