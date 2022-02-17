import { createSelector } from 'reselect';
import { TwitchStateType } from './twitch.types';

const getSubState = (state: any) => state.twitch as TwitchStateType;

const getUser = createSelector(getSubState, state => state.user);

const getUserId = createSelector(getUser, user => user?.id);

const getStreamInfo = createSelector(getSubState, state => state.streamInfo);

const getCheermotes = createSelector(getSubState, state => state.cheermotes);
const getCheermote = (prefix: string) => createSelector(getCheermotes, cheermotes => cheermotes?.find(c => c.prefix === prefix));

const getCheermoteLevel = (prefix: string, bits: number) => createSelector(getCheermote(prefix), cheermote => cheermote?.tiers.find(c => bits >= c.min_bits));

const isModerator = createSelector(getUser, user => user?.is_moderator || false);


export default {
    getUser,
    getUserId,
    getStreamInfo,
    getCheermotes,
    getCheermote,
    getCheermoteLevel,
    isModerator,
};
