import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {


    let dialogElements =
        props.dialogs.map((dialog) => (<DialogItem name={dialog.name} id={dialog.id}/>))



    let messagesElements =
        props.messages.map((message) => (<MessageItem text={message.text} id={message.id}/>))

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;