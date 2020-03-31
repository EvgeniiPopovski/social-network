const UPDATE_MESSAGE_TEXT = 'UDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
    dialogs: [
        {name: 'Анастасия', id: 1},
        {name: 'Дмитрий', id: 2},
        {name: 'Петр', id: 3},
        {name: 'Игорь', id: 4}
    ],
    messages: [
        {text: "Куку", id: 1},
        {text: "Как я просто в шоке) нереально сложно пргсто мождно сойтис  ума жизнь?", id: 2},
        {text: "Хай, йоу!", id: 3},
        {text: "Nixao!", id: 4},
        {text: "Darova", id: 5},
    ],
    newMessageText: ''
};

const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.text;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let message = {
                text: state.newMessageText,
                id: state.messages.length + 1,
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(message);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        default:
            return state;

    }
};

export default messagesPageReducer