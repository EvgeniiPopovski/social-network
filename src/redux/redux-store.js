import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer";
import navbarPageReducer from "./navbarPageReducer"
import userReduser from "./usersPageReducer";
import AuthMeRdeucer from "./AuthMeReducer";

let redusers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    navbarPage: navbarPageReducer,
    usersPage: userReduser,
    AuthMe: AuthMeRdeucer
})


let store = createStore(redusers);

window.store = store;
export default store;