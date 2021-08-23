import {AnyAction} from "redux";
import {TwitchStateType} from "./twitch.types";
import {createReducer} from "@reduxjs/toolkit";
import {userInfoReceived, streamInfoReceived} from "./twitch.actions";
import {logout} from "../auth/auth.actions";


const initialState: TwitchStateType = {
    user: undefined,
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(userInfoReceived, (state, action) => {
            return {
                ...state,
                user: action.payload,
            }
        })
        .addCase(streamInfoReceived, (state, action) => {
            return {
                ...state,
                streamInfo: action.payload,
            }
        })
        .addCase(logout, (state, action) => {
            return initialState;
        })
});

export default reducer;
