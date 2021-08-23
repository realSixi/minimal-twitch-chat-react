import React from 'react';
import './UserInfo.less';
import {TwitchUserInfo} from "../../../redux/twitch/twitch.types";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";

const UserInfo = ({user} : {user: TwitchUserInfo}) => {
    return (
        <div className='user-info flex items-center space-x-2'>
            <img className={'h-7 rounded-full'} src={user.profile_image_url}/>


        </div>
    );
};

export default UserInfo;
