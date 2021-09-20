import {usersAPI, profileAPI} from "../api/api";


const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'first post', likesCount: 12},
        {id: 3, message: 'dfm', likesCount: 13},
    ],
    profile: null,
    newPostText: 'it-kamasutra.com',
    status:'',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newMessageChange,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }

        default:
            return state;

    }
}

export const addPostActionCreator = (newMessageChange) => ({type: ADD_POST, newMessageChange})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) =>(dispatch)=> {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))

    })
}

export const getStatus = (userId) =>(dispatch)=> {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))

    })
}

export const updateStatus = (status) =>(dispatch)=> {
    profileAPI.updateStatus(status).then(response => {
        console.log(response.data)
        if (response.data.resultCode === 0) {
         dispatch(setStatus(status))
       }

    })
}



export default profileReducer
