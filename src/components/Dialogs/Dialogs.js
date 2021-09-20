import React from 'react';
import  style from './Dialogs.module.css'
import  DialogItem from './DialogItem/DialogItem'
import  Message from './Message/Message'
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsConrols/FormsControls';
import {requaredFiels, maxLengthCreator} from '../Utils/Validators'






const Dialogs = (props)=>{



    let state= props.dialogsPage

    let dialogElements = state.dialogsData.map((dialog)=>   (<DialogItem  name ={dialog.name}  id = {dialog.id}/>))
    let messageElements = state.messageData.map((massage)=>   ( <Message message={massage.message}  id = {massage.id} />))

    let addNewMessageChange =(values) => {
        props.sendMessage(values.newMessageChange)
     }

  

    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    { dialogElements }
                </div>
                <div className={style.massages}>
                    <div>{ messageElements }</div>
                    <Message massage={''} />
                    <AddMessageFormRedux onSubmit ={addNewMessageChange}/>
                </div>
            </div>



        </div>
    )
}

const maxLength = maxLengthCreator(50)

const AddMessageForm = (props) => {

    return ( 
       <form onSubmit= {props.handleSubmit}>
         
          <div>
              <Field  component= {Textarea}  
              name = "newMessageChange"
               placeholder ="Enter your massge"
               validate = {[requaredFiels, maxLength ]}
               /></div>
          <div><button> Send </button></div>
   
     
      </form>
    )
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)

export  default Dialogs;