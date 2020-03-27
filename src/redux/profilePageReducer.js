const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';


const profilePageReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                message: state.newPostText,
                id: state.posts.length + 1
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export default profilePageReducer