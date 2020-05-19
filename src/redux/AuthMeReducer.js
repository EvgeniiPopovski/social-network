import {authAPI, securityAPI} from "../API/API";
import { stopSubmit } from "redux-form";

const SET_AUTHME = "SET_AUTHME"
const SET_CAPTCHA = 'SET_CAPTCHA'

const initialState = {
    userId: '',
    login: '',
    email: '',
    isLogged: false,
    captchaUrl: '',
};


const  AuthMeReducer = (state = initialState,action) => {
    switch (action.type) {
        case SET_AUTHME:
            return {...state, ...action.payload};
        case SET_CAPTCHA: 
            return {...state , captchaUrl: action.captchaUrl}
        default: return state;
    }
};

export const setAuthME = (userId , email , login , isLogged) => {
    return {type: SET_AUTHME, payload : {userId , email , login , isLogged}}
};

const captchaUrlAC = (captchaUrl) => {
    return {type: SET_CAPTCHA , captchaUrl: captchaUrl }
}

export const getAuthMeThunkCreator = () => async (dispatch) => {
    let response = await authAPI.getAuth()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthME(id, email, login, true))
    }

}

export const loginThunkCreator = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthMeThunkCreator())
        }else{
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrlThunkCreator())
            } 
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
            dispatch(stopSubmit('Login', { _error: message }));
        }
    }

}

export const logoutThunkCreator = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthME(null, null, null, false))
        }
    }
}

export const getCaptchaUrlThunkCreator = () => {
    return async (dispatch) => {
        let response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url;
        dispatch(captchaUrlAC(captchaUrl))
    }
}


export default AuthMeReducer;