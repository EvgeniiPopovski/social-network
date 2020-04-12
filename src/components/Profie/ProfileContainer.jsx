import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        };
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then((response) => {
            this.props.setUserProfile(response.data);
        });
    }
    render () {
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
};

let WithRoutProfileContainer = withRouter (ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps) (WithRoutProfileContainer);
