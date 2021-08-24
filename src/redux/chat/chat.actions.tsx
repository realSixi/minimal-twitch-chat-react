import { createAction } from '@reduxjs/toolkit';
import {
    BanActionPayload,
    ChatEntry,
    ChatMessageDeleted,
    DeleteMessageActionPayload,
    TimeoutActionPayload,
} from './chat.types';

export const types = {};


export const selectChannel = createAction<string, 'chat/channel'>('chat/channel');
export const channelJoined = createAction<string, 'chat/joined'>('chat/joined');

export const chatMessage = createAction<ChatEntry, 'chat/message'>('chat/message');

export const chatMessageDeleted = createAction<ChatMessageDeleted, 'chat/message-deleted'>('chat/message-deleted');

export const banUser = createAction<BanActionPayload, 'chat/ban'>('chat/ban');
export const timeoutUser = createAction<TimeoutActionPayload, 'chat/timeout'>('chat/timeout');
export const deleteMessage = createAction<DeleteMessageActionPayload, 'chat/delete-message'>('chat/delete-message');


export const resetChat = createAction('chat/reset');
export const resetMessages = createAction('chat/reset-messages');


export const connected = createAction('chat/connected');

export default {
    resetChat,
    chatMessage,
    selectChannel,
    channelJoined,
    banUser,
    timeoutUser,
    deleteMessage,
    chatMessageDeleted,
    resetMessages,
    connected
};
