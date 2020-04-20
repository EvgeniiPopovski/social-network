import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {setUserProfileAC, setUserProfileThunkCreator} from "../../redux/profilePageReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        };
        this.props.setUserProfile(userId);
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
        setUserProfile: (userId) => {dispatch(setUserProfileThunkCreator(userId))}
    })
};

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
) (ProfileContainer)

