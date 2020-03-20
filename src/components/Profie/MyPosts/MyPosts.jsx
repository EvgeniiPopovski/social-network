import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const NewPost = () => {
    return (
        <div>
            <h3> My posts </h3>
            <div>
                <textarea> </textarea>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </div>
    )
}

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <NewPost/>
            <Post message='Hello word' />
            <Post message='Hello puki4' />
        </div>
    )
}
export default MyPosts;