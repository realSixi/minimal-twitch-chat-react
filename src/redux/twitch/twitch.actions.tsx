import {createAction} from "@reduxjs/toolkit";
import { TwitchCheermotes, TwitchStreamInfo, TwitchUserInfo } from './twitch.types';


// export const tokenReceveived = createAction<TokenLoginActionPayload, typeof LoginActionTypes["login/token"]>(LoginActionTypes["login/token"])


export const userInfoReceived = createAction<TwitchUserInfo, 'twitch/userinfo'>('twitch/userinfo')
export const streamInfoReceived = createAction<TwitchStreamInfo, 'twitch/streaminfo'>('twitch/streaminfo');

export const getFollowedStreams = createAction<undefined, 'twitch/followedStreams'>('twitch/followedStreams');
export const followedStreamsReceived = createAction<TwitchStreamInfo[], 'twitch/followedStreams'>('twitch/followedStreams');

export const cheermotesReceived = createAction<TwitchCheermotes[], 'twitch/cheermotes'>('twitch/cheermotes')




export default {
    userInfoReceived,
    streamInfoReceived,
    getFollowedStreams,
    followedStreamsReceived,
    cheermotesReceived,
};
