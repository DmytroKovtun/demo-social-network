import React from "react";
import {connect} from "react-redux";
import  {
    setCurrentPage,
    setIsFetching,
    toggleFollowingInProgress,
    requestUsersThunkCreator,
    follow,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { withAuthRedirect } from "../../hoc/AuthrRdirect";
import { compose } from "redux";
import { getPageSize, getTotalUsersCount, getUsers,currentPage,getIsFetching, getfollowingInProgress } from "../../redux/users-selectors";


class UsersAPIComponent extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
       this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanget = (pageNumber) => {

        this.props.requestUsers(pageNumber, this.props.pageSize)
    }



    render () {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanget = {this.onPageChanget}
                      totalUsersCount = {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      users = {this.props.users}
                      currentPage = {this.props.users}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow}
                   toggleFollowingInProgress = {this.props.toggleFollowingInProgress}
                   followingInProgress = {this.props.followingInProgress}
        />
        </>

    }

}

/*let mapStateToProps =(state)=>{

    return {
        users:state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress,
    }
} */

let mapStateToProps =(state)=>{

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: currentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getfollowingInProgress(state),
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setIsFetching,
        setCurrentPage,
        toggleFollowingInProgress,
        requestUsers: requestUsersThunkCreator
    })

)(UsersAPIComponent)




