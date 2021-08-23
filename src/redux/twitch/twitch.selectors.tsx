import {createSelector} from 'reselect';
import {TwitchStateType} from "./twitch.types";

const getSubState = (state: any) => state.twitch as TwitchStateType;

const getUser = createSelector(getSubState, state => state.user);

const getUserId = createSelector(getUser, user => user?.id);

const getStreamInfo = createSelector(getSubState, state => state.streamInfo);


export default {
    getUser,
    getUserId,
    getStreamInfo,
};
