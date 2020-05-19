import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            {props.profile !== null &&  <img alt='Small avatar' src={props.profile.photos.small || 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false'}/>} 
            {props.message} <br/>
            <span>Like</span>
        </div>
    )
}

export default Post;