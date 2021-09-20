import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import  {getAuthUserData, logaut} from "../../redux/auth-reducer";




class HeaderContainer extends React.Component {


    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    login: state.authReducer.login,
    isAuth: state.authReducer.isAuth,

})


export default connect(mapStateToProps, {getAuthUserData, logaut})(HeaderContainer)