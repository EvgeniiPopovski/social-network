import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {addNewPost, subscribe, updatePostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let renderIntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addNewPost={addNewPost} updatePostText={updatePostText}/>
        </BrowserRouter>, document.getElementById('root'));
}

renderIntireTree();

subscribe(renderIntireTree)



serviceWorker.unregister();
