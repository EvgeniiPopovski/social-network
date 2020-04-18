import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {setUserProfileAC, setUserProfileThunkCreator} from "../../redux/profilePageReducer";
import {Redirect, withRouter} from "react-router-dom";



class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        };
        this.props.setUserProfile(userId);
    }
    render () {
        if (!this.props.isLogged) {return <Redirect to={"/login"}/>}
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
        isLogged: state.AuthMe.isLogged
    })
};


let mapDispatchToProps = (dispatch) => {
    return ({
        setUserProfile: (userId) => {dispatch(setUserProfileThunkCreator(userId))}

    })
};

let WithRoutProfileContainer = withRouter (ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps) (WithRoutProfileContainer);
