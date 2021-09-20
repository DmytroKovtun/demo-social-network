import {applyMiddleware, combineReducers} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";
import {reducer as formReducer} from  'redux-form'

const {createStore} = require("redux");

let reducers = combineReducers({
    dialogsReducer,
    profileReducer,
    sidebarReducer,
    usersReducer,
    authReducer,
    appReducer,
    form: formReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store