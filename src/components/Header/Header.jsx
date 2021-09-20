  import React from 'react';
  import  s from './Header.module.css'
  import {NavLink} from "react-router-dom";


const Header = (props)=>{
  return(
  <header className={s.header}>
  <img src='https://www.pinclipart.com/picdir/big/537-5374089_react-js-logo-clipart.png'></img>
 <div className={s.loginBlock}>
     {props.isAuth ? <div>{props.login} <button onClick = {props.logaut}>Log out</button></div>:
   <NavLink to = {'/login'}>Login</NavLink>}
 </div>


  </header>
  )
}

export default Header