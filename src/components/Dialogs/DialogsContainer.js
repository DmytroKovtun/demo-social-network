import React from 'react';
import dialogsReducer, {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import Redirect from '../Login/login'
import {withAuthRedirect} from '../../hoc/AuthrRdirect'
import { compose } from 'redux';

let mapStateToProps = (state)=>{

    return {
        dialogsPage: state.dialogsReducer,
        newMessageBody: state.dialogsReducer.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        sendMessage: (newMassageBody)=>{dispatch(sendMessageCreator(newMassageBody));}
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect 
)(Dialogs)


