// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
// import usersReducer from "./users-reducer";
//
//
//
//
// let store = {
//     _state : {
//         profilePage:{
//             posts : [
//                 {id: 1, message:'Hi, how are you', likesCount:12},
//                 {id: 2, message: 'first post',likesCount:12},
//                 {id: 3, message: 'dfm',likesCount:13},
//             ],
//             newPostText: 'it-kamasutra.com'
//         },
//         messagePage:{
//             dialogsData : [
//                 {id: 1, name: 'Dima'},
//                 {id: 2, name: 'Andrey'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Sasha'}
//             ],
//             messageData : [
//                 {id: 1, message:'Hi'},
//                 {id: 2, message: 'to'},
//                 {id: 3, message: 'vfvdv'},
//                 {id: 4, message: 'Sttehasha'}
//             ],
//             newMessageBody: 'dd',
//         }
//     },
//     _callSubscriber (state){
//         console.log(state)
//     },
//
//     getState(){
//         return this._state
//     },
//     subscribe  (observer) {
//             this._callSubscriber  =  observer;
//         },
//
//     dispatch(action){
//
//         this._state.profilePage= profileReducer(this._state.profilePage,action)
//         this._state.messagePage= dialogsReducer(this._state.messagePage,action)
//         this._state.sidebar= sidebarReducer(this._state.sidebar,action)
//         this._state.sidebar= usersReducer(this._state.sidebar,action)
//
//         this._callSubscriber(this._state)
//     }
//
// }
//
//
//  export default  store

