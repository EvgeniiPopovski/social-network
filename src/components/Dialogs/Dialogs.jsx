import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let dialogs = [
        {name: 'Анастасия', id: 1},
        {name: 'Дмитрий', id: 2},
        {name: 'Петр', id: 3},
        {name: 'Игорь', id: 4}
    ];

    let dialogElements =
        dialogs.map((dialog) => (<DialogItem name={dialog.name} id={dialog.id}/>))

    let messages = [
        {text: "Куку", id: 1},
        {text: "Как жизнь?", id: 2},
        {text: "Хай, йоу!", id: 3},
        {text: "Nixao!", id: 4},
        {text: "Darova", id: 5},
    ]

    let messagesElements =
        messages.map((message) => (<MessageItem text={message.text} id={message.id}/>))

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