import React from 'react';
import Profile from "./Profile";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profilePageReducer";


class ProfileContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
            this.props.setUserProfile(response.data);
        });
    }

    render () {
        debugger;
        return (
            <div>
                <ProfileInfo profile={this.props.profile} />
                <MyPostsContainer {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
    })
};


let mapDispatchToProps = (dispatch) => {
    return ({
        setUserProfile: (profile) => {dispatch(setUserProfileAC(profile))}
    })
}

export default connect(mapStateToProps, mapDispatchToProps) (ProfileContainer);
