import React from 'react';
import v from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from './ProfileStatus.jsx'
import ProfileStatusWhithHooks from './ProfileStatusWhithHooks';


const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                {/* <img src='https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg'></img> */}
            </div>
            <div className={'descroptionBlock'}>
                <img src ={props.profile.photos.large}/>
                <ProfileStatusWhithHooks status = {props.status} updateStatus = {props.updateStatus}/>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo