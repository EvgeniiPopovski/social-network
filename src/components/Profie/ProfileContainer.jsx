import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    setUserProfileThunkCreator,
    updateStatusThunkCreator
} from "../../redux/profilePageReducer";
import { withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        };
        this.props.setUserProfile(userId);
        this.props.getStatus(userId)
    }
    render () {
        return (
            <div>
                <ProfileInfo profile={this.props.profile} status={this.props.status} updateStatus = {this.props.updateStatus} />
                <MyPostsContainer {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        status : state.profilePage.status

    })
};


let mapDispatchToProps = (dispatch) => {
    return ({
        setUserProfile: (userId) => {dispatch(setUserProfileThunkCreator(userId))},
         getStatus : (userId) => {dispatch(getStatusThunkCreator(userId))},
        updateStatus: (status) => {dispatch(updateStatusThunkCreator(status))}

    })
};

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
) (ProfileContainer)

