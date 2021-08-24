import { delay, put, select, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { authActions, authSelectors } from './index';
import CONFIG from '../../config';
import { Action } from 'redux';
import { chatActions, chatSelectors } from '../chat';
import { persistor } from '../store';


function* tokenReceived({payload : token}: PayloadAction<string, string>) {
    console.log("Saga -> ", token)

    let {data} = yield axios.get('https://id.twitch.tv/oauth2/userinfo',{
        headers: {
            'Authorization': `Bearer ${token}`,

        }
    })

    console.log("Userinfo", data)

}

function* loginProcess({} : Action) {
    yield persistor.flush();
    window.location.href = `https://id.twitch.tv/oauth2/authorize?client_id=${CONFIG.TWITCH_CLIENT_ID}&redirect_uri=${window.location.origin}/minimal-twitch-chat-react/login/callback&force_verify=false&response_type=token&scope=${encodeURIComponent('chat:edit chat:read channel:moderate')}&claims=sub,exp`
}

export default function* authSaga() {
    console.log("INIT auth");

    yield take('persist/REHYDRATE');

    let loginInProgress: boolean = yield select(authSelectors.isInLoginProcess);
    console.log("Login in process?", loginInProgress)
    if(!loginInProgress){
        // yield put(chatActions.resetChat());
        yield put(chatActions.resetMessages());
        yield put(authActions.logout());



    }

    yield takeLatest(authActions.login.type, loginProcess);
    yield takeLatest(authActions.processToken.type, tokenReceived)
}
