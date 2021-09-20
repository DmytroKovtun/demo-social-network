import React from "react";
import  styles from './Users.module.css'

import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";



 let Users = ({totalUsersCount, pageSize,onPageChanget, currentPage, selectedPage, ...props}) => {

        let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize)

        let pages = [];

        for (let i = 1; i<= pagesCount; i++){
            pages.push(i)
        }
        
        console.log(  props.follow)
        

        return <div>
            {/* <div>
                {
                    pages.map( item => {
                       return  <span className={props.currentPage === item && styles.selectedPage}  onClick = {(e)=>{props.onPageChanget(item)}}> {item}</span>
                    })
                }

            </div> */}

            {
              props.users.map(u => <div key = {u.id}>
                <span>
                    
                    <div>
                        <NavLink to = {'/profile/'+ u.id}>
                               <img src={u.photos.small !=null ? u.photos.small: userPhoto } className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                       { console.log(props)}
                        {u.followed ?<button

                                disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={()=>props.unfollow(u.id)}> Unfollow </button>:

                            <button disabled={props.followingInProgress.some(id => id === u.id)} 
                             onClick={()=> props.follow(u.id) }

                            > Follow </button> }

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location"}</div>
                        <div>{"u.location"}</div>
                    </span>



                </span>
                </div>)
            }
        </div>

}

export default Users