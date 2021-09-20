import React from 'react'


const Paginators = (props) => {

 return  <div>
     {
     pages.map( item => {
        return  <span className={props.currentPage === item && styles.selectedPage}  onClick = {(e)=>{props.onPageChanget(item)}}> {item}</span>
     })
   }

</div>



}