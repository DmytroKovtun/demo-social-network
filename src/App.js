import React, { Suspense } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from './components/Login/login';
import { connect } from 'react-redux';
import  {getAuthUserData} from "./redux/auth-reducer";
import { compose } from 'redux';
import { withRouter} from 'react-router-dom';
import {initializeApp} from './redux/app-reducer'
import Preloader from './components/common/preloader/Preloader';

const DialogsContainer = React.lazy(()=>import ( "./components/Dialogs/DialogsContainer"));


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
}

  render(){

    if (this.props.initialized) return <Preloader/>
    
    return(

         <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>

        <div className="app-wrapper-content">
            <Route path ="/news" component = {News}/>
            <Route path ="/music" component = {Music}/>
            <Route path ="/settings" component = {Settings}/>
            <Route path ="/dialogs" render = {()=>{
            return <Suspense  fallback = {<div>Loading...</div>}>
            <DialogsContainer/>
            </Suspense>
            }}/>
            <Route path ="/profile/:userId" render = {()=><ProfileContainer/>}/>
            <Route path ="/users" render = {()=><UsersContainer/>}/>
            <Route path ="/login" render = {()=><LoginPage/>}/>

        </div>

    </div>

  );
  }
}


const mapStateToProps = (state)=> ({
  initialized: state.appReducer.initialized
})
 
export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App) 