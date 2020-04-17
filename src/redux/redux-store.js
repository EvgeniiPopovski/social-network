import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer";
import navbarPageReducer from "./navbarPageReducer"
import userReduser from "./usersPageReducer";
import AuthMeRdeucer from "./AuthMeReducer";
import thunkMiddleware from "redux-thunk";

let redusers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    navbarPage: navbarPageReducer,
    usersPage: userReduser,
    AuthMe: AuthMeRdeucer
})


let store = createStore(redusers , applyMiddleware(thunkMiddleware));

window.store = store;
export default store;