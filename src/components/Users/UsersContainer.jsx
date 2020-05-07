import React from "react";
import {connect} from "react-redux";
import {
    followUserThunkCreator, getUsersThunkCreator,
    setCurrentPageAC, setTotalUsersCountAC, unFollowUserThunkCreator,
} from "../../redux/usersPageReducer";
import Users from "./Users";
import s from './Users.module.css'
import Preloader from "../common/Preloader";
import { getUsersSuperSelector, getUsersPerPage, getTotalUsersCount, getCurrentPage, getFetching, getIsFollowingInProgress } from "../../redux/usersSelectors";


class UsersAPIComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage , this.props.usersPerPage)
    }
    onPageChange = (page) => {
        this.props.getUsersThunkCreator(page , this.props.usersPerPage)
    };
    render() {
        return (<div className={s.usersContainer}>
            {this.props.isFetching ? <Preloader/> : null }
                <Users totalUsersCount={this.props.totalUsersCount}
                       usersPerPage={this.props.usersPerPage}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       unFollowUserThunkCreator={this.props.unFollowUserThunkCreator}
                       followUserThunkCreator={this.props.followUserThunkCreator}
                       onPageChange={this.onPageChange}
                       isFetching={this.props.isFetching}
                       isFollowingInProgress={this.props.isFollowingInProgress}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        usersPerPage: getUsersPerPage(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state),
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        followUserThunkCreator: (userId) => {dispatch(followUserThunkCreator(userId))},
        unFollowUserThunkCreator: (userId) => {dispatch(unFollowUserThunkCreator(userId))},
        setCurrentPage: (page) => {dispatch(setCurrentPageAC(page))},
        getUsersThunkCreator: (currentPage, usersPerPage) => {dispatch(getUsersThunkCreator(currentPage,usersPerPage))},
        setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))}
    };
};

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (UsersAPIComponent);

export default UsersContainer;
