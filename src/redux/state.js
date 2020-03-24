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
            ]
        },
        navbarPage: {
            friends: [
                {name: 'Илья Сидоров', id: 1},
                {name: "Макс Ласковец", id: 2},
                {name: "Женуша Поповская", id: 3}
            ]
        }
    },
    renderIntireTree() {
        console.log('State changed')
    },
    addNewPost() {
        let newPost = {
            message: this._state.profilePage.newPostText,
            id: this._state.profilePage.posts.length + 1
        };
        this._state.profilePage.posts.push(newPost);
        this.updatePostText('')
        this.renderIntireTree();
    },
    updatePostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.renderIntireTree(this._state);
    },
    subscribe(observer) {
        this.renderIntireTree = observer;
    },
    getState () {
        return this._state;
    }
};

export default store;