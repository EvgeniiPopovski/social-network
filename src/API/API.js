import * as axios from 'axios';

export let getUsers = (currentPage = 1, usersPerPage = 10) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${usersPerPage}`, {withCredentials: true})
        .then(response => response.data);
};

export let unfollowUser = (userId) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        withCredentials: true,
        headers: {'API-KEY': 'd6c82b27-7542-428f-a89c-13e7b9f79f63'}
    })
        .then(response => response.data)
};

export let followUser = (userId) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
        withCredentials: true,
        headers: {'API-KEY': 'd6c82b27-7542-428f-a89c-13e7b9f79f63'}
    })
        .then(response => response.data)
};