import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {message: 'Hello word', id: 1},
    {message: 'Hello puki4', id: 2},
    {message: "Привет, Пятро", id: 3},
    {message: 'First Post', id: 4}
]

let dialogs = [
    {name: 'Анастасия', id: 1},
    {name: 'Дмитрий', id: 2},
    {name: 'Петр', id: 3},
    {name: 'Игорь', id: 4}
];

let messages = [
    {text: "Куку", id: 1},
    {text: "Как жизнь?", id: 2},
    {text: "Хай, йоу!", id: 3},
    {text: "Nixao!", id: 4},
    {text: "Darova", id: 5},
]


ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
