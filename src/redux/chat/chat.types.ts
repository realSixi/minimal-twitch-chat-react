import { Userstate } from 'tmi.js';

export interface ChatEntry {
    id?: string,
    timestamp: Date,
    userstate: Userstate,
    message: string,
    type: ChatEntryType,
    subMessages?: ChatEntry[],
    deleted?: boolean
}


export interface ChatMessageDeleted {
    channel: string,
    username: string,
    deletedMessage: string,
    messageId?: string,
}


export interface BanActionPayload {
    username: string,
    reason?: string,
}


export interface TimeoutActionPayload {
    username: string,
    reason?: string,
    duration?: number,
}

export interface DeleteMessageActionPayload {
    msgId: string,
}

export enum ChatEntryType {
    chat,
    action,
    cheer,
    sub,
    resub,
    subgift,
    submysterygift,
    anonsubgift,
    primepaidupgrade,
    host,
    raid,
}


// interface CheerType {
//     timestamp: Date,
//     userstate: ChatUserstate,
//     message: string,
// }
//
// interface SubscriptionType {
//     timestamp: Date,
//     userstate: SubUserstate,
//     message: string,
// }

// enum ChatMessageType {}


// interface chatStateType {
//     messages: (ChatMessageType | SubscriptionType | CheerType)[],
// }


