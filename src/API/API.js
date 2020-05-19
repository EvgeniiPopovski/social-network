import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "56a969a8-2f1b-423c-8fe5-542cebe7e03d"
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, usersPerPage = 10)  {
        return instance.get(`users?page=${currentPage}&count=${usersPerPage}`)
            .then(response => response.data);
    },
    unfollowUser  (userId)  {
        return instance.delete(`/follow/${userId}`)
            .then(response => response.data)
    },
    followUser  (userId) {
        return instance.post(`/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {'API-KEY': '56a969a8-2f1b-423c-8fe5-542cebe7e03d'}
        })
            .then(response => response.data)
    }
}

export const profileAPI = {
    
    setUserProfileAPI  (userId) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => response.data)
    },
    getStatus (userId) {
        return axios.get (`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`, {withCredentials: true})
    },
    updateStatus (status) {
        return axios.put (`https://social-network.samuraijs.com/api/1.0/profile/status`, {status : status}, {withCredentials: true, headers: {'API-KEY': '56a969a8-2f1b-423c-8fe5-542cebe7e03d'}})
    },
    saveFile (file) {
        let formData = new FormData();
        formData.append('image' , file)
        console.log(formData)
        return instance.put (`/profile/photo`,formData , {headers : {'Content-Type': 'multipart/form-data'}})
    },
    setNewUserProfileData (profileData) { 
        return instance.put (`/profile`, {...profileData})
    }
}

export const authAPI = {
    getAuth  ()  {
        return axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
    },
    login (email,password, remeberMe, captcha = null) {
        return axios.post('https://social-network.samuraijs.com/api/1.0/auth/login', { email , password , remeberMe, captcha},  {withCredentials: true, headers: {'API-KEY': '56a969a8-2f1b-423c-8fe5-542cebe7e03d'}})
    },
    logout () {
        return axios.delete('https://social-network.samuraijs.com/api/1.0/auth/login' , {withCredentials: true, headers: {'API-KEY': '56a969a8-2f1b-423c-8fe5-542cebe7e03d'}} )
    }
}

export  const securityAPI = {
    getCaptchaUrl () {
        return instance.get('security/get-captcha-url')
    }
}