const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_MESSAGE_TEXT = 'UDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hello word', id: 1},
                {message: 'Hello  puki4', id: 2},
                {message: "Привет, Пятро", id: 3},
                {message: 'First Post', id: 4}
            ],
            newPostText: ''
        },
        messagesPage: {
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
            newMessageText: '',
        },
        navbarPage: {
            friends: [
                {name: 'Илья Сидоров', id: 1},
                {name: "Макс Ласковец", id: 2},
                {name: "Женуша Поповская", id: 3}
            ]
        }
    },
    getState () {
        return this._state;
    },
    subscribe(observer) {
        this.renderIntireTree = observer;
    },
    renderIntireTree() {
        console.log('State changed')
    },

    //Переносим в dispatch()
    /*addNewPost() {

        let newPost = {
            message: this._state.profilePage.newPostText,
            id: this._state.profilePage.posts.length + 1
        };
        this._state.profilePage.posts.push(newPost);
        this.updatePostText('');
        this.renderIntireTree(this._state);
    },
    updatePostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.renderIntireTree(this._state);
    },
*/

    dispatch(action) {
        // для newPost
        if (action.type === ADD_NEW_POST) {
            let newPost = {
                message: this._state.profilePage.newPostText,
                id: this._state.profilePage.posts.length + 1
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ""
            this.renderIntireTree(this._state);
        }
        else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this.renderIntireTree(this._state);
        }
        else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.text;
            console.log(this._state.messagesPage.newMessageText)
            this.renderIntireTree(this._state);
        }
        else if  (action.type === SEND_MESSAGE) {
            let message =  {
                text: this._state.messagesPage.newMessageText ,
                id: this._state.messagesPage.messages.length + 1,
            };
            this._state.messagesPage.messages.push(message);
            this._state.messagesPage.newMessageText = '';
            this.renderIntireTree(this._state);
        }
    }
};


export const addPostActionCreator = () => {
    return {type: ADD_NEW_POST }
};

export const updatePostTextActionCreator = (text) => {
    return {type: UPDATE_POST_TEXT, newText: text}
};

export const addMessageActionCreator = (message) => {
    return {type: SEND_MESSAGE, text: message}
};

export const updateMessageTextActionCreator = (mesasge) => {
    return {type:UPDATE_MESSAGE_TEXT, text: mesasge }
}

export default store;