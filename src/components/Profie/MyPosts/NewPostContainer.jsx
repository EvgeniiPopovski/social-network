import React from "react";
import {addPostActionCreator,updatePostTextActionCreator} from '../../../redux/profilePageReducer'
import NewPost from "./NewPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {dispatch(addPostActionCreator(postText))},
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps) (NewPost)

export default NewPostContainer;