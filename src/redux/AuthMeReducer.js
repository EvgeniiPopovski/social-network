import {authAPI} from "../API/API";
import { stopSubmit } from "redux-form";

const SET_AUTHME = "SET_AUTHME"

const initialState = {
    userId: '',
    login: '',
    email: '',
    isLogged: false,
};


const  AuthMeReducer = (state = initialState,action) => {
    switch (action.type) {
        case SET_AUTHME:
            return {...state, ...action.payload} ;
        default: return state;

    }
};

export const setAuthME = (userId , email , login , isLogged) => {
    return {type: SET_AUTHME, payload : {userId , email , login , isLogged}}
};

export const getAuthMeThunkCreator = () => {
    return (dispatch) => {
        return authAPI.getAuth()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data;
                    dispatch(setAuthME(id, email, login, true))
                }
            })
    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthMeThunkCreator())
                } else {
                    let message =  response.data.messages.length > 0 ?  response.data.messages[0] : 'Some Error'
                    dispatch(stopSubmit('Login', {_error: message}));
                }
            }
        )
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logout()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthME(null , null , null , false))
            }
        })
    }
}


export default AuthMeReducer;