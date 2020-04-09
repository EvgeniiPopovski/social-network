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
        addPost: () => {dispatch(addPostActionCreator())},
        onTextAreaChange: (text) => {dispatch(updatePostTextActionCreator(text))}
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps) (NewPost)

export default NewPostContainer;