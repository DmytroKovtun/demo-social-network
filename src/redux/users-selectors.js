import {createSelector} from "reselect"

export const getUsers = (state)=> {
 return state.usersReducer.users;
}

export const getUserSuper = createSelector( ()=> {
  
})

export const getPageSize = (state)=> {
  return state.usersReducer.pageSize;
 }

 export const getTotalUsersCount = (state)=> {
  return state.usersReducer.totalUsersCount;
 }

 export const currentPage = (state)=> {
  return state.usersReducer.currentPage;
 }

 export const getIsFetching = (state)=> {
  return state.usersReducer.isFetching;
 }

 export const getfollowingInProgress = (state)=> {
  return state.usersReducer.followingInProgress;
 }