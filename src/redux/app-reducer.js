import {authAPI} from "../api/api";
import {stopSubmit} from 'redux-form'
import{getAuthUserData} from './auth-reducer'


const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS'


let initialState = {
    initialized: false,
    email: null,
    login: null,
    isAuth:false,
}
const appReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_INITIALIZED_SUCCESS:
            return  {
                ...state,
                initialized: true,
            }
        default :
            return state;

    }
}

export const setInitialaizedSuccess =()=>({ type: SET_INITIALIZED_SUCCESS})


export const initializeApp =()=>(dispatch) => {
     let promise = dispatch(getAuthUserData())
     Promise.all([promise]).then(()=> {dispatch(setInitialaizedSuccess)})

}

export  default appReducer