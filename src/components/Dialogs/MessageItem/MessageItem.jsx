import s from "../Dialogs.module.css";
import React from "react";

const MessageItem = ({text}) => {
    return (
        <div className={s.messageItem}>
            {text}
        </div>
    )
}

export default MessageItem