import {profileAPI} from "../API/API";

const ADD_NEW_POST = 'ADD-NEW-POST',
    DELETE_POST = 'DELETE_POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_STATUS = "SET_STATUS",
    SET_USER_AVATAR = "SET_USER_AVATAR";


// в старом State Ээто ProfilePage
const initialState =  {
    posts: [
        {message: 'Hello word', id: 1},
        {message: 'Hello  puki4', id: 2},
        {message: "Привет, Пятро", id: 3},
        {message: 'First Post', id: 4}
    ],
    profile: null,
    status : "",
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            let newPost = {
                message: action.postText,
                id: state.posts.length + 1
            };
            // сщхдаем копию State, т.к. нельзя менять приходящий State
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts, newPost];
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            let stateCopy = {...state, profile: action.profile};
            return stateCopy;
        }
        case SET_STATUS :
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST : 
            return {
                ...state, posts: state.posts.filter(post => post.id !== action.postId)
            };
        case SET_USER_AVATAR: 
            return {
                ...state, profile: {...state.profile, photos: action.photos }
            }
        default:
            return state;
    }
};


export const addPostActionCreator = (postText) => {
    return {type: ADD_NEW_POST, postText }
};

export const deletePostActionCreator = (id) => {
    return {type: DELETE_POST , postId: id}
}

export const setStatusAC = (status) => {
    return {type: SET_STATUS , status: status}
}

export const setUserProfileAC = (profile) => {
    return {type: SET_USER_PROFILE, profile }
};

export const setUserAvatar = (photos) => {
    return {type:  SET_USER_AVATAR, photos}
}


export const setUserProfileThunkCreator =  (userId) =>  {
    return async (dispatch) => {
        let response = await profileAPI.setUserProfileAPI(userId)
        dispatch(setUserProfileAC(response));
    };
}

export const getStatusThunkCreator = (userId) => {
    return async (dispatch) => {
        try{
        let response = await profileAPI.getStatus(userId)
            dispatch(setStatusAC(response.data))
        }
        catch (error) {
            alert('АШИБКА')
        }
    }
};

export const updateStatusThunkCreator = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatusAC(status))
        }
    }
};

export const saveFileThunkCreator = (filePath) => {
    return async (dispatch) => {
        let response = await profileAPI.saveFile(filePath);
        if (response.data.resultCode === 0) {
            dispatch(setUserAvatar(response.data.data.photos))
        }
    }
}

export const saveProfileThunkCreator = (profileData) => {
    
    return async(dispatch , getState) => {
        const userId = getState().AuthMe.userId
        let response = await profileAPI.setNewUserProfileData(profileData)
        if (response.data.resultCode === 0) {
            dispatch(setUserProfileThunkCreator(userId))
        }
    }
}

export default profilePageReducer