import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import { Field, reduxForm } from 'redux-form';
import {requaredFiels, maxLengthCreator} from '../../Utils/Validators'
import { Textarea } from '../../common/FormsConrols/FormsControls';


const  maxLength = maxLengthCreator(10);

const MyPosts = (props) => {


   
    let postElements = props.posts.map((post)=> (<Post massage={post.message} likesCount = {post.likesCount}/>))



    let onAddPost = (values)=> {
        props.addPost(values.newPostChange)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My MyPosts</h3>
            <div>
                <AddPostForm  onSubmit = {onAddPost}/>
            </div>
            <div>
                New Post
            </div>
            <div className={s.posts}>
                { postElements }
            </div>
        </div>
    )
}


const AddNewPostForm = (props) => {

   

    return ( 
       <form onSubmit= {props.handleSubmit}>
         
          <div>
              <Field  component= {Textarea} 
               name = "newPostChange"
                placeholder ="Enter your massge"
                validate = {[requaredFiels, maxLength]}
                /></div>
          <div><button> Send </button></div>
   
     
      </form>
    )
}

const AddPostForm = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)


export default MyPosts