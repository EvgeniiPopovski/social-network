import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer";
import navbarPageReducer from "./navbarPageReducer"
import userReduser from "./usersPageReducer";
import AuthMeRdeucer from "./AuthMeReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import AppReducer from './AppReducer'

let redusers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    navbarPage: navbarPageReducer,
    usersPage: userReduser,
    AuthMe: AuthMeRdeucer,
    form: formReducer,
    App : AppReducer,
})


let store = createStore(redusers , applyMiddleware(thunkMiddleware));

window.store = store;
export default store;