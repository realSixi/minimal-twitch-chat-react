import { delay, put, select, takeLatest } from 'redux-saga/effects';
import { twitchActions, twitchSelectors } from './index';
import { authActions, authSelectors } from '../auth';
import axios from 'axios';
import { followedStreamsReceived, streamInfoReceived } from './twitch.actions';
import { chatActions, chatSelectors } from '../chat';
import CONFIG from '../../config';


function* getUserInfo() {
    let token: string = yield select(authSelectors.getToken);
    let { data } = yield axios.get(`https://api.twitch.tv/helix/users`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Client-Id': CONFIG.TWITCH_CLIENT_ID,
        },

    });

    yield put(twitchActions.userInfoReceived(data.data[0]));
}

function* getBroadcasterId(channelName: string) {

    let token: string = yield select(authSelectors.getToken);

    let { data } = yield axios.get(`https://api.twitch.tv/helix/users`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Client-Id': CONFIG.TWITCH_CLIENT_ID,
        },
        params: {
            login: channelName,
        },
    });
    console.log('GetUser', data);
    if (data.data[0])
        return data.data[0].id as string;
    throw new Error('channel not found');
}


function* getChannelInfo() {
    let isLoggedIn: boolean = yield select(authSelectors.isLoggedIn);
    if (isLoggedIn) {

        const channelName: string = yield select(chatSelectors.getChannelName);
        const broadcasterId: string = yield getBroadcasterId(channelName);
        let token: string = yield select(authSelectors.getToken);
        while (true) {

            let { data } = yield axios.get(`https://api.twitch.tv/helix/streams`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Client-Id': CONFIG.TWITCH_CLIENT_ID,
                },
                params: {
                    user_id: broadcasterId,
                },
            });

            console.log('streamInfo', data);

            yield put(streamInfoReceived(data.data[0]));

            yield delay(30000);

        }
    }

}

function* requestFollowedStreams() {
    let userId: string = yield select(twitchSelectors.getUserId);
    let token: string = yield select(authSelectors.getToken);

    let { data } = yield axios.get(`https://api.twitch.tv/helix/streams/followed`,
        {
            params: {
                'user_id': userId,
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Client-Id': CONFIG.TWITCH_CLIENT_ID,
            },
        });

    yield put(followedStreamsReceived(data.data));
}

export default function* twitchSaga() {
    console.log('Twitch Saga Ready');
    yield takeLatest(authActions.processToken.type, getUserInfo);
    yield takeLatest(chatActions.channelJoined.type, getChannelInfo);
    yield takeLatest(twitchActions.getFollowedStreams.type, requestFollowedStreams);
}
