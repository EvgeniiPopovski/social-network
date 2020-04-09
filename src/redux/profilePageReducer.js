const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

// в старом State Ээто ProfilePage
const initialState =  {
    posts: [
        {message: 'Hello word', id: 1},
        {message: 'Hello  puki4', id: 2},
        {message: "Привет, Пятро", id: 3},
        {message: 'First Post', id: 4}
    ],
        newPostText: '',
    profile: null,
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            let newPost = {
                message: state.newPostText,
                id: state.posts.length + 1
            };
            // сщхдаем копию State, т.к. нельзя менять приходящий State
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            if (stateCopy.newPostText !== ''){
                stateCopy.posts.push(newPost);
            }
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            let stateCopy = {...state, profile: action.profile};
            return stateCopy;
        }
        default:
            return state;
    }
};


export const addPostActionCreator = () => {
    return {type: ADD_NEW_POST }
};

export const updatePostTextActionCreator = (text) => {
    return {type: UPDATE_POST_TEXT, newText: text}
};

export const setUserProfileAC = (profile) => {
    return {type: SET_USER_PROFILE, profile }
};

export default profilePageReducer