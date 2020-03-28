import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/store";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let updateMessageTextContainer = (message) => {
        props.store.dispatch(updateMessageTextActionCreator(message));
    };

    let addMessageContainer = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    return <Dialogs addMessage={addMessageContainer}
                    updateMessageText={updateMessageTextContainer}
                    newMessageText={state.messagesPage.newMessageText}
                    messages={state.messagesPage.messages}
                    dialogs={state.messagesPage.dialogs}/>
};

export default DialogsContainer;