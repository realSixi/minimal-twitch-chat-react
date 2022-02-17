import {AnyAction} from "redux";
import {TwitchStateType} from "./twitch.types";
import {createReducer} from "@reduxjs/toolkit";
import * as twitchActions from './twitch.actions';
import {logout} from "../auth/auth.actions";


const initialState: TwitchStateType = {
    user: undefined,
    cheermotes: undefined,
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(twitchActions.userInfoReceived, (state, action) => {
            return {
                ...state,
                user: action.payload,
            }
        })
        .addCase(twitchActions.streamInfoReceived, (state, action) => {
            return {
                ...state,
                streamInfo: action.payload,
            }
        })
        .addCase(logout, (state, action) => {
            return initialState;
        })
        .addCase(twitchActions.setIsModerator, (state, action) => {
            if(!state.user)
                return state;
            return {
                ...state,
                user: {
                    ...state.user,
                    is_moderator: action.payload,
                }
            }
        })
        .addCase(twitchActions.cheermotesReceived, (state, action)=>{
            return {
                ...state,
                cheermotes: action.payload,
            }
        })
});

export default reducer;
