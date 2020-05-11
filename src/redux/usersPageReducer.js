import {usersAPI} from "../API/API";

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
    isFollowingInProgress: [],
};

//usersPage

const userReduser= (state = InitialState, action) => {

    switch (action.type) {
        case FOLLOW : {
            return   {
                ...state,
                users: FollowUnfollowToggleUtilitie(state.users , action.userId , "id" , {followed: true})
            }
        }
        case UNFOLLOW: {
            return  {
                ...state,
                users: FollowUnfollowToggleUtilitie(state.users , action.userId , "id" , {followed: false})
            }
        }
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
            let stateCopy = {...state,
                isFollowingInProgress: action.isFollowing
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id != action.userId)};
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

export const toggleFollowingInProgressAC = (followingPropgress, userId) => {
    return {type: TOGGLE_IS_FOLLOWING_INPROGRES, isFollowing: followingPropgress, userId: userId }
}

export const getUsersThunkCreator = (currentPage, usersPerPage)=> {
    return async (dispatch) => {
        dispatch(isFetchingToggleAC(true));
        let response = await usersAPI.getUsers(currentPage, usersPerPage)
                dispatch(setUsersAC(response.items));
                dispatch(setCurrentPageAC(currentPage))
                dispatch(setTotalUsersCountAC(response.totalCount));
                dispatch(isFetchingToggleAC(false));
    }
}



const FollowUnfollowToggle = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgressAC(true, userId))
    let response = await apiMethod(userId)
    if (response.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgressAC(false, userId))
}




export const unFollowUserThunkCreator = (userId) => {
    return async (dispatch) => {FollowUnfollowToggle(dispatch,userId, usersAPI.unfollowUser.bind(usersAPI), unfollowAC)
    }
};

export const followUserThunkCreator = (userId) => {
    return async (dispatch) => {FollowUnfollowToggle(dispatch,userId, usersAPI.followUser.bind(usersAPI), followAC)
    }
};

export default userReduser;


// let stateCopy = {
//     ...state,
//     users: state.users.map(u => {
//         if (u.id === action.userId) {
//             return {...u, followed: false};
//         }
//         return u
//     })
// }


const FollowUnfollowToggleUtilitie = (itemsArray , itemId , objPropName, newProperty) => {
    return itemsArray.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newProperty}
        }
        return u
    })
}

