import React from "react";


const NewPost = (props) => {

    const textAreaRef = React.createRef();
    let addPost = () => {
        props.addPost()
    };

    let onTextAreaChange = () => {
        let text = textAreaRef.current.value;
        props.onTextAreaChange(text)
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
};

export default NewPost