import { render } from '@testing-library/react';
import React, {useState, useEffect} from 'react';




const ProfileStatusWhithHooks = (props) =>  {
   
  let [editMode, setEditMode] = useState(false)

  let [status, setStatus] = useState(props.status)

  useEffect(()=> {
    setStatus(props.status)}, [props.status]
  )



   const  activeEditMode = () => {
    setEditMode(true); 
  }

  const deactiveEditMode  = ()=> {
    setEditMode(false); 
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.target.value)
    }

  
  return (
    <div>
      { !editMode &&
        <div>
           <span onDoubleClick = {activeEditMode}> {props.status || "No Status" } </span>
        </div>
        }
      { editMode &&
        <div> 
        <input onChange = {onStatusChange} value = {status} autoFocus = {true} onBlur = {deactiveEditMode}></input>
      </div>
      }
    </div>
  )
  
  
}

export default ProfileStatusWhithHooks
