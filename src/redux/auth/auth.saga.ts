import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { authActions } from './index';


function* tokenReceived({payload : token}: PayloadAction<string, string>) {
    console.log("Saga -> ", token)

    let {data} = yield axios.get('https://id.twitch.tv/oauth2/userinfo',{
        headers: {
            'Authorization': `Bearer ${token}`,

        }
    })

    console.log("Userinfo", data)

}

export default function* authSaga() {
    console.log("INIT auth");


    yield takeLatest(authActions.processToken.type, tokenReceived)

}
