import React from 'react';
import { Field, reduxForm } from 'redux-form';
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import MessageItem from "./MessageItem/MessageItem";
import {maxLengthCreator, required} from './../../validators/validators.js'
import { TextArea } from '../common/FormControls/FormControls';

const maxLength10 = maxLengthCreator(10)

const Dialogs = (props) => {
    let dialogElements =
        props.dialogs.map((dialog) => (<DialogItem name={dialog.name} id={dialog.id} />));
    let messagesElements =
        props.messages.map((message) => (<MessageItem text={message.text} id={message.id} />));

    let addMessage = (messageText) => {
        props.addMessage(messageText);
    };

    let sendNewMessage = (values) => {
        addMessage(values.sendMessageForm)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <DialogsReduxForm onSubmit={sendNewMessage} />
        </div>
    )
}

export default Dialogs;

const sendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea}
                name='sendMessageForm'
                value={props.newMessageText}
                validate={[required, maxLength10]}
                placeholder="Добавьте Сообщение" /> <br></br>
            <button>Отправить</button>
        </form>
    )
}


const DialogsReduxForm = reduxForm(
    { form: 'sendMessageForm' }
)(sendMessageForm)