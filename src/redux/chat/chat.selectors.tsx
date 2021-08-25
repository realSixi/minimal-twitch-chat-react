import {createSelector} from 'reselect';
import {ChatStateType} from "./chat.reducer";

const getSubState = (state: any) => state.chat as ChatStateType;


const getMessages = createSelector(getSubState, state => state.messages)

const getMessageCount = (user?: string) => createSelector(getSubState, state => state.userMessageCount[user || 'anonymous'] || 0);


const getChannelName = createSelector(getSubState, state => state.channelName)


export default {
    getMessages,
    getMessageCount,
    getChannelName
};
