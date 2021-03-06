import React from 'react';
import  {Field, reduxForm} from 'redux-form'
import { Input } from '../common/FormsConrols/FormsControls';
import { requaredFiels } from '../Utils/Validators';
import {connect} from 'react-redux'
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from '../common/FormsConrols/FormsControls.module.css'

const LoginForm = (props)=> {
   console.log(props)
  return  <>
     <form onSubmit = {props.handleSubmit}>
        <div>
          <Field placeholder ={'email'}
           name = {'email'} 
           component = {Input}
           validate ={[requaredFiels]} />
        </div>
        <div>
          <Field placeholder ={'Password'}
            name = {'password'}
            component = {Input}
            type = {'password'}
            validate ={[requaredFiels]}
             />
        </div>
        <div>
          <Field component = {Input} type ={'checkbox'} name = {'rememberMe'} /> remember me 
        </div>
         { props.error && <div className = {style.formSummaryError}>
            {props.error}
          </div> }
        <div> 
          <button> Login </button>
        </div>
      </form>
  </>
  
}


const LoginReduxForm = reduxForm ({
  // a unique name for form
    form: 'login'
})(LoginForm)


const  Login = (props)=> {

  const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe)
  }


  if (props.isAuth) {
    return <Redirect to = {"/profile"}/>
  }

  return (

    <div>
    <h1> Login </h1>
    <LoginReduxForm onSubmit = {onSubmit}/>
    </div>
  )
  
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, {login})(Login)