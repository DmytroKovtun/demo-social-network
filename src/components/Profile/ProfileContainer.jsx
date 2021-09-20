
import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import profileReducer, {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import { withRouter} from 'react-router-dom'
import {withAuthRedirect} from '../../hoc/AuthrRdirect'
import { compose } from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        
        let userId = this.props.match.params.userId
        if (!userId){
            userId = this.props.authorizedUserId;
        }
       
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        console.log(this.props)
        return (
            <Profile {...this.props} 
            profile = {this.props.profile} 
             status = {this.props.status}
             updateStatus = {this.props.updateStatus}
             />
        )
    }

}



let mapStateToProps = (state)=>({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authorizedUserId: state.authReducer.userId,
    isAuth: state.authReducer.isAuth
})



export default compose (
    connect(mapStateToProps,{getUserProfile, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
    )(ProfileContainer)

