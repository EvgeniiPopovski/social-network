import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
           <MyPosts posts={props.posts}  addNewPost={props.addNewPost} updatePostText={props.updatePostText}/>
        </div>

    )
}
export default Profile;