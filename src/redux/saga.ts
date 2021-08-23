import chatSaga from "./chat/chat.saga";
import authSaga from './auth/auth.saga'
import {spawn} from 'redux-saga/effects'
import twitchSaga from "./twitch/twitch.saga";



export default function* rootSaga() {
    console.log("Saga Init done");

    yield spawn(chatSaga);
    yield spawn(authSaga);
    yield spawn(twitchSaga);
}
