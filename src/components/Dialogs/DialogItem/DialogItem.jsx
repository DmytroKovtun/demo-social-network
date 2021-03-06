import React from 'react';
import  style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom"




const  DialogItem = (props)=>{
    let  path = "/dialogs/" + props.id
    return <div className={style.dialog+ ' '+style.active}>
        <NavLink to={path}>{props.name}  {props.id}</NavLink>
    </div>
}



export  default DialogItem;