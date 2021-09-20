import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state)=>{
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        addPost: (newMessageChange)=>{dispatch(addPostActionCreator(newMessageChange))},
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;