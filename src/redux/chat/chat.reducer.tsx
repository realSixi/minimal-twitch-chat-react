import {AnyAction} from "redux";
import { channelJoined, chatMessage, chatMessageDeleted } from './chat.actions';
import {createReducer} from "@reduxjs/toolkit";
import {ChatEntry} from "./chat.types";
import { chatActions } from './index';
import { twitchActions } from '../twitch';


export interface ChatStateType {
    messages: ChatEntry[],
    userMessageCount: { [username: string]: number },
    channelName?: string,
}

const initialState: ChatStateType = {
    messages: [],
    userMessageCount: {},
};


const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(channelJoined, (state, action) => {
            return {
                ...state,
                channelName: action.payload,
                messages: [],
            }
        })
        .addCase(chatMessage, (state, action) => {
            console.log("Chat message Case!")
            const name = action.payload.userstate['display-name'] || 'anonymous';

            if (action.payload.userstate['reply-parent-msg-id']) {
                let found = false;
                state.messages = state.messages.map(msg => {
                    if (msg.id === action.payload.userstate['reply-parent-msg-id']) {
                        msg.subMessages = [...(msg.subMessages || []), action.payload]
                        found = true;
                    }
                    return msg;
                })

                if(!found){
                    state.messages = [action.payload, ...state.messages.slice(0, 300),];
                }
            } else {
                state.messages = [action.payload, ...state.messages.slice(0, 300),];
            }

            state.userMessageCount = {
                ...state.userMessageCount,
                [name]: (state.userMessageCount[name] || 0) + 1,
            }
        })
        .addCase(chatMessageDeleted, (state, action) => {
            return {
                ...state,
                messages: state.messages.map(msg => {
                    if(msg.id === action.payload.messageId){
                        return {
                            ...msg,
                            deleted: true,
                        }
                    }
                    return msg;
                })
            }
        })
    ;
});

export default reducer;
