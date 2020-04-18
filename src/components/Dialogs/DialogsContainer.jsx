import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/messagesPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux/es/alternate-renderers";


let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        messages: state.messagesPage.messages,
        dialogs: state.messagesPage.dialogs,
        isLogged: state.AuthMe.isLogged
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(addMessageActionCreator())},
        updateMessageText: (message) => {dispatch(updateMessageTextActionCreator(message))} ,
    }
};


const DialogsContainer = connect (mapStateToProps, mapDispatchToProps ) (Dialogs);



export default DialogsContainer;