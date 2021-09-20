import * as axios from "axios";


const instance =  axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "310aedfd-4868-44f9-ae53-bd0b39797d36"
    },

});

export const usersAPI = {
    requestUsers (currentPage =1 ,pageSize =10)  {
             return    instance.get(`users?page=${currentPage}&count=${pageSize}`)
                 .then(respons => respons.data)},
    follow (userId) {
        return instance.post(`follow/${userId}`)
        },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)

                },
    getProfile (userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId)
        }
    }

    export const profileAPI = {
  
        getProfile (userId) {
            return instance.get(`profile/${userId}`)
            },
        
        getStatus (userId) {
                return instance.get(`profile/status/${userId}`)
                },
        
        updateStatus (status) {
                    return instance.put(`profile/status`, {status})
                },

        }



    
export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logaut() {
        return instance.delete(`auth/login`);
    }
}

 


