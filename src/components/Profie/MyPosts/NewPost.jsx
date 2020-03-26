import React from "react";
import {addPostActionCreator,updatePostTextActionCreator} from '../../../redux/state'


const NewPost = (props) => {

    const textAreaRef = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    };

    let onTextAreaChange = () => {
        let text = textAreaRef.current.value;
        props.dispatch(updatePostTextActionCreator(text));
    };

    return (
        <div>
            <h3> My posts </h3>
            <div>
                <textarea ref={textAreaRef} value={props.newPostText} onChange={onTextAreaChange}/>
            </div>
            <div>
                <button onClick={addPost}>Отправить</button>
            </div>
        </div>
    )
}

export default NewPost