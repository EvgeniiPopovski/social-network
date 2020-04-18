import {authApi} from "../API/API";

const SET_AUTHME = "SET_AUTHME"

const initialState = {
    id: '',
    login: '',
    email: '',
    isLogged: false,
};


const  AuthMeReducer = (state = initialState,action) => {
    switch (action.type) {
        case SET_AUTHME:
            return {...state, ...action, isLogged: true} ;
        default: return state;

    }
};

export const setAuthME = (action) => {
    return {type: SET_AUTHME, id: action.data.id, login: action.data.login, email: action.data.email}
};

export const getAuthMeThunkCreator = () => {
    return (dispatch) => {
        authApi()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthME(response.data))
                }
            })
    }
}

export default AuthMeReducer;