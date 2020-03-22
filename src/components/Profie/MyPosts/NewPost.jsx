import React from "react";

const NewPost = (props) => {

    const textAreaRef = React.createRef();
    let addPost = () => {
        let text = textAreaRef.current.value;
        props.addNewPost(text)
    }

    return (
        <div>
            <h3> My posts </h3>
            <div>
                <textarea ref={textAreaRef}>  </textarea>
            </div>
            <div>
                <button onClick={addPost}>Отправить</button>
            </div>
        </div>
    )
}

export default NewPost