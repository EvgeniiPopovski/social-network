import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {
    debugger;
    let dialogElements =
        props.dialogs.map((dialog) => (<DialogItem name={dialog.name} id={dialog.id}/>));
    let messagesElements =
        props.messages.map((message) => (<MessageItem text={message.text} id={message.id}/>));

    let updateMessageText = (e) => {
        let message = e.target.value;
        props.updateMessageText(message);
    };

    let addMessage = () => {
        props.addMessage();
        if (props.newMessageText == '') {
            alert ('Невозможно отправить пучтое сообщение! :(')
        }
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea value={props.newMessageText} onChange={updateMessageText}></textarea> <br></br>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;