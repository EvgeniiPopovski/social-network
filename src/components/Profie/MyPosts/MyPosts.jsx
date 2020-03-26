import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import NewPost from "./NewPost";





const MyPosts = (props) => {

    let post = props.posts.posts.map((post)=>(<Post message={post.message} id={post.id} />))
    return (
        <div className={s.posts}>
            <NewPost newPostText={props.posts.newPostText} dispatch={props.dispatch}/>
           {post}
        </div>
    )
}
export default MyPosts;