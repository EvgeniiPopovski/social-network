import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer";
import navbarPageReducer from "./navbarPageReducer"
import userReduser from "./usersPageReducer";

let redusers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    navbarPage: navbarPageReducer,
    usersPage: userReduser,
})


let store = createStore(redusers);

window.store = store;
export default store;