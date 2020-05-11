import React from 'react';
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
};

const MyPostsContainer = connect (mapStateToProps,null ) (MyPosts)

export default MyPostsContainer;