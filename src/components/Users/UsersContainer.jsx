import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    isFetchingToggleAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/usersPageReducer";
import * as axios from "axios";
import Users from "./Users";
import preloader from '../../img/preloader.gif'
import s from './Users.module.css'
import Preloader from "../common/Preloader";


class UsersAPIComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.isFetchingToggle(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.isFetchingToggle(false);
        });
    }
    onPageChange = (page) => {
        this.props.setCurrentPage(page);
        this.props.isFetchingToggle(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPerPage}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.isFetchingToggle(false);
        })
    };
    render() {
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
        isFetching: state.usersPage.isFetching
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (page) => {dispatch(setCurrentPageAC(page))},
        setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))},
        isFetchingToggle: (isFetching) => {dispatch(isFetchingToggleAC(isFetching))}

    };
};

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (UsersAPIComponent);

export default UsersContainer;
