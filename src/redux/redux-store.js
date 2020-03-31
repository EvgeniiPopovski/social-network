import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer";
import navbarPageReducer from "./navbarPageReducer"

let redusers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    navbarPage: navbarPageReducer,
})


let store = createStore(redusers);

window.store = store
export default store;