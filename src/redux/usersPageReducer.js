const FOLLOW= 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET USERS';


const InitialState = {
    users:[],
};

const userReduser= (state = InitialState, action) => {

    switch (action.type) {
        case FOLLOW : {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isfollowing: true};
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
                        return {...u, isfollowing: false};
                    }
                    return u
                })
            };
            return stateCopy;
        };
        case SET_USERS :
            let stateCopy = {...state, users: [...state.users, ...action.users]};
            return stateCopy;
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

export default userReduser;