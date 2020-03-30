import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import NewPostContainer from "./NewPostContainer";


const MyPosts = (props) => {
    debugger;
    let postItem = props.posts.map((postItem)=>(<Post message={postItem.message} id={postItem.id} />))

    return (
        <div className={s.posts}>
            <NewPostContainer newPostText={props.newPostText} dispatch={props.store.dispatch}/>
            {postItem}
        </div>
    )
}
export default MyPosts;