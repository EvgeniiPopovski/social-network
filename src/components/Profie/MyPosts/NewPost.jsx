import React from "react";
import { Field, reduxForm,  } from "redux-form";
import {required, maxLengthCreator} from "./../../../validators/validators"
import { TextArea } from "../../common/FormControls/FormControls.jsx";

const maxLength100 = maxLengthCreator(100)

const NewPost = (props) => {
    
    let addPost = (postText) => {
        props.addPost(postText);   
    }
    let addPostText = (value) => {
        addPost(value.newPostText)  
    }

    return (
        <div>
            <h3> My posts </h3>
           <NewPostReduxForm onSubmit={addPostText}/>
            
        </div>
    )
};

export default NewPost

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field component={TextArea} name='newPostText' placeholder='Введите новый пост' 
                validate={[required, maxLength100]} />
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
};

const NewPostReduxForm = reduxForm({
    form: 'newPostText'
}) (NewPostForm) 