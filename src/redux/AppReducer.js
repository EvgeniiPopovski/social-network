import {getAuthMeThunkCreator} from './AuthMeReducer'

const SET_INITIALIZED = 'SET_INITIALIZED'


const initialState = {
    initialized: false
}

 const  AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: 
        
            let stateCopy = {...state, initialized: true}
            return stateCopy

        default:  return state
    }
}

export const setInitialAC = () => {
    return {type: SET_INITIALIZED}
}

export const setInitializeThunkCreator = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthMeThunkCreator());
        Promise.all([promise])
            .then(() => { dispatch(setInitialAC()) })
    }
}

export default AppReducer;