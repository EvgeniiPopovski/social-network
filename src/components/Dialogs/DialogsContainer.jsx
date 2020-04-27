import React from 'react';
import {addMessageActionCreator} from "../../redux/messagesPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux/es/alternate-renderers";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        messages: state.messagesPage.messages,
        dialogs: state.messagesPage.dialogs,

    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (messageText) => {dispatch(addMessageActionCreator(messageText))},
    }
};

export default compose (
    connect (mapStateToProps, mapDispatchToProps ),
    withAuthRedirect
) (Dialogs)
