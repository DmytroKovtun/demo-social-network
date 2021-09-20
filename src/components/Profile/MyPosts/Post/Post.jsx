import React from 'react';
import  poststyle from './Post.module.css'


const Post = (props)=> {
  return( 
    <div className={poststyle.item}>
        <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxl9M59xCIPJhWEj4eTMrgUho2rNI93Gpt-g&usqp=CAU'/>
        {props.massage}
        <div> {props.likesCount}</div>


    </div>
  
   
  )
}

export default Post