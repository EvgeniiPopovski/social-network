import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    isFetchingToggleAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleFollowingInProgressAC,
    unfollowAC
} from "../../redux/usersPageReducer";
import Users from "./Users";
import s from './Users.module.css'
import Preloader from "../common/Preloader";
import {getUsers} from "../../API/API";


class UsersAPIComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props)
        this.props.isFetchingToggle(true);
        getUsers(this.props.currentPage , this.props.usersPerPage)
        .then((data) => {
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.isFetchingToggle(false);
        });
    }
    onPageChange = (page) => {
        this.props.setCurrentPage(page);
        this.props.isFetchingToggle(true);
        getUsers(page , this.props.usersPerPage).then((data) => {
            this.props.setUsers(data.items);
            this.props.isFetchingToggle(false);
        })
    };
    render() {
        console.log (this.props)
        return (<div className={s.usersContainer}>
            {this.props.isFetching ? <Preloader/> : null }
                <Users totalUsersCount={this.props.totalUsersCount}
                       usersPerPage={this.props.usersPerPage}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       onPageChange={this.onPageChange}
                       isFetching={this.props.isFetching}
                       isFollowingInProgress={this.props.isFollowingInProgress}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersPerPage: state.usersPage.usersPerPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (page) => {dispatch(setCurrentPageAC(page))},
        setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))},
        isFetchingToggle: (isFetching) => {dispatch(isFetchingToggleAC(isFetching))},
        toggleFollowingProgress: (followingPropgress, userId) => {dispatch(toggleFollowingInProgressAC(followingPropgress, userId))}

    };
};

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (UsersAPIComponent);

export default UsersContainer;
