import React, {useEffect} from 'react';
import './ChannelList.less';
import {useDispatch} from "react-redux";
import {twitchActions} from "../../redux/twitch";
import {getFollowedStreams} from "../../redux/twitch/twitch.actions";

const ChannelList = ({}) => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(twitchActions.getFollowedStreams())
    },[])

    return (
        <div className='channel-list'>

        </div>
    );
};

export default ChannelList;
