const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

// в старом State Ээто ProfilePage
const initialState =  {
    posts: [
        {message: 'Hello word', id: 1},
        {message: 'Hello  puki4', id: 2},
        {message: "Привет, Пятро", id: 3},
        {message: 'First Post', id: 4}
    ],
        newPostText: '',
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            debugger;
            let newPost = {
                message: state.newPostText,
                id: state.posts.length + 1
            };
            // сщхдаем копию State, т.к. нельзя менять приходящий State
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            console.log(stateCopy)
            return stateCopy;
        }
        case UPDATE_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export default profilePageReducer