import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let renderIntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addNewPost={store.addNewPost.bind(store)} updatePostText={store.updatePostText.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}

renderIntireTree(store.getState());

store.subscribe(renderIntireTree);



serviceWorker.unregister();
