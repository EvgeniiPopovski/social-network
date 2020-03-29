import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux/es/alternate-renderers";


let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        messages: state.messagesPage.messages,
        dialogs: state.messagesPage.dialogs,
    }
};

let mapStateToDispatch = (dispatch) => {
    return {
        addMessage: () => {dispatch(addMessageActionCreator())},
        updateMessageText: (message) => {dispatch(updateMessageTextActionCreator(message))} ,
    }
};


const DialogsContainer = connect (mapStateToProps, mapStateToDispatch ) (Dialogs);



export default DialogsContainer;