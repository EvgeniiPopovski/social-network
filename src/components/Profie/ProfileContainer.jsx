import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { connect } from "react-redux";
import {
  getStatusThunkCreator,
  setUserProfileThunkCreator,
  updateStatusThunkCreator,
  saveFileThunkCreator,
  saveProfileThunkCreator
} from "../../redux/profilePageReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../HOC/WithAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.isLoggedId;
      if (!userId) {
        userId = this.props.history.push("/login");
      }
    }
    this.props.setUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, nextProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <div>
        <ProfileInfo
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          saveFile={this.props.saveFile}
          saveProfile={this.props.saveProfile}
        />
        <MyPostsContainer {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isLogged: state.AuthMe.isLogged,
    isLoggedId: state.AuthMe.userId,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (userId) => {
      dispatch(setUserProfileThunkCreator(userId));
    },
    getStatus: (userId) => {
      dispatch(getStatusThunkCreator(userId));
    },
    updateStatus: (status) => {
      dispatch(updateStatusThunkCreator(status));
    },
    saveFile: (filePath) => {
        dispatch(saveFileThunkCreator(filePath))
    },
    saveProfile: (profileData) => {
      dispatch(saveProfileThunkCreator(profileData))
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
