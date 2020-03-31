const FOLLOW= 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET USERS';

const InitialState = {
    users: [
        {id: 1, isfollowing: false,fullname: 'Петров Иван',status: 'boss', location:{country: 'Belarus', city: 'Minsk'}},
        {id: 2,isfollowing: true, fullname: 'Игонь Андреев',status: 'bigboss',location:{country: 'Russias', city: 'Orel'}},
        {id: 3, isfollowing: false,fullname: 'Жанна Агузарова', status: 'very big boss',location:{country: 'Russias', city: 'Orel'}},
    ]
};

const userReduser= (state = InitialState, action) => {
    switch (action.type) {
        case FOLLOW : {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
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
                    if (u.id === action.id) {
                        return {...u, isfollowing: true};
                    }
                    return u
                })
            };
            return stateCopy;
        };
        case SET_USERS :
            let stateCopy = {...state, users: [...state.users, ...action.users]}
        default: return state
    }
    return state;
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