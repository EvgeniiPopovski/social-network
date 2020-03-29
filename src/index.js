import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";


let renderIntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}

renderIntireTree(store.getState());

store.subscribe(() => {
    renderIntireTree(store.getState())
});


serviceWorker.unregister();
