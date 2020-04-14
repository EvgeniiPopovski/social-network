const FOLLOW= 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET USERS';
const SET_CURRENT_PAGE = 'SET CURRENT PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const IS_FETCHING_TOGGLE = 'IS_FETCHING_TOGGLE';
const TOGGLE_IS_FOLLOWING_INPROGRES = 'TOGGLE_IS_FOLLOWING_INPROGRES'


const InitialState = {
    users:[],
    // Значение usersPerPage хардкодиться вручную, totalUsersCount приходит к нам с сервера
    // в качестве ответа на наш Get запрос всех Юзеров
    usersPerPage: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: false,
};

//usersPage

const userReduser= (state = InitialState, action) => {

    switch (action.type) {
        case FOLLOW : {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u
                })
            };
            return stateCopy;
        }
        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u
                })
            };
            return stateCopy;
        };
        case SET_USERS :{
            let stateCopy = {...state, users: [...action.users]};
            return stateCopy;
        }
        case SET_CURRENT_PAGE: {
            let stateCopy = {...state, currentPage: action.currentPage};
            return stateCopy;
        }
        case TOTAL_USERS_COUNT: {
            let stateCopy = {...state, totalUsersCount: action.totalCount };
            return stateCopy
        }
        case IS_FETCHING_TOGGLE: {
            let stateCopy = {...state, isFetching: action.isFetching};
            return stateCopy
        }
        case TOGGLE_IS_FOLLOWING_INPROGRES: {
            debugger;
            let stateCopy = {...state, isFollowingInProgress: action.isFollowing};
            return stateCopy
        }
        default: return state
    }
}

export const followAC = (userId) => {
    return {type: FOLLOW, userId}
}
export const unfollowAC  = (userId) => {
    return {type: UNFOLLOW, userId}
}

export const setUsersAC = (users) => {
    return {type: SET_USERS, users}
}

export const setCurrentPageAC = (page) => {
    return {type: SET_CURRENT_PAGE, currentPage:page}
}

export const setTotalUsersCountAC = (totalCount) => {
    return {type: TOTAL_USERS_COUNT, totalCount}
}

export const isFetchingToggleAC = (isFetching) => {
    return {type: IS_FETCHING_TOGGLE, isFetching: isFetching}
};

export const toggleFollowingInProgressAC = (followingPropgress) => {
    return {type: TOGGLE_IS_FOLLOWING_INPROGRES, isFollowing: followingPropgress}
}



export default userReduser;