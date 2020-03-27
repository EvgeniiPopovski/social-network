const UPDATE_MESSAGE_TEXT = 'UDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE'

const messagesPageReducer = (state, action) => {
    debugger;
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        case SEND_MESSAGE:
            let message = {
                text: state.newMessageText,
                id: state.messages.length + 1,
            };
            state.messages.push(message);
            state.newMessageText = '';
            return state;
        default:
            return state;

    }
}
export default messagesPageReducer