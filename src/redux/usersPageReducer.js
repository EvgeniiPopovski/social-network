const FOLLOW= 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET USERS';


const InitialState = {
    users: [
        {id: 1, avatarUrl: 'https://i.kym-cdn.com/photos/images/facebook/000/215/813/d57.png', isfollowing: false,fullname: 'Петров Иван',status: 'boss', location:{country: 'Belarus', city: 'Minsk'}},
        {id: 2, avatarUrl: 'https://i.kym-cdn.com/photos/images/facebook/000/215/813/d57.png', isfollowing: true, fullname: 'Игонь Андреев',status: 'bigboss',location:{country: 'Russias', city: 'Orel'}},
        {id: 3, avatarUrl: 'https://i.kym-cdn.com/photos/images/facebook/000/215/813/d57.png', isfollowing: false,fullname: 'Жанна Агузарова', status: 'very big boss',location:{country: 'Russias', city: 'Orel'}},
    ]
};

const userReduser= (state = InitialState, action) => {
    debugger;
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