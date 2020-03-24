import React from "react";

const NewPost = (props) => {
    debugger;

    const textAreaRef = React.createRef();
    let addPost = () => {
        props.addNewPost()
    };

    let onTextAreaChange = () => {
        let text = textAreaRef.current.value;
        props.updatePostText(text);

    }

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