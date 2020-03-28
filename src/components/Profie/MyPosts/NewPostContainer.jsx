import React from "react";
import {addPostActionCreator,updatePostTextActionCreator} from '../../../redux/store'
import NewPost from "./NewPost";


const NewPostContainer = (props) => {

    let addPostContainer = () => {
        props.dispatch(addPostActionCreator())
    };

    let onTextAreaChangeContainer = (text) => {
        props.dispatch(updatePostTextActionCreator(text));
    };

    return <NewPost addPost={addPostContainer} onTextAreaChange={onTextAreaChangeContainer} newPostText={props.newPostText}/>
};

export default NewPostContainer;