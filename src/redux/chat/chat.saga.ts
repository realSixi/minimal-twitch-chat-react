import { call, delay, fork, put, select, take, takeLatest } from 'redux-saga/effects';
import tmi, { DeleteUserstate, SubGiftUserstate, SubMethods, SubMysteryGiftUserstate, SubUserstate } from 'tmi.js';
import { eventChannel } from 'redux-saga';
import chatActions, { chatMessage, chatMessageDeleted } from './chat.actions';
import {
    ChatEntry,
    ChatEntryTags,
    ChatEntryType,
    DeleteMessageActionPayload,
    TimeoutActionPayload,
} from './chat.types';
import { chatSelectors } from './index';
import { authActions } from '../auth';
import { TwitchUserInfo } from '../twitch/twitch.types';
import { twitchActions } from '../twitch';
import CONFIG from '../../config';
import dotprop from 'dot-prop-immutable';

function* init(client: tmi.Client) {
    console.log('INIT!');
    // @ts-ignore
    const chatChannel: any = yield call(createTmiChannel, client);
    while (true) {

        console.log('waiting for race...');
        // const {event, close} = yield race({
        //     event: take(chatChannel),
        //     close: take(chatActions.selectChannel.type),
        // })
        // const event : ChatEntry = yield take(chatChannel);

        // console.log("race", event, close)

        let event: PayloadAction<'message', ChatEntry> = yield take(chatChannel);

        if (event?.payload?.userstate) {
            let messageCount: number = yield select(chatSelectors.getMessageCount(event.payload.userstate['display-name']));
            event = dotprop.set(event, `payload.tags`, []);

            if(event.payload.userstate['custom-reward-id']){
                event = dotprop.set(event, `payload.tags.$end`, ChatEntryTags.reward);
            }
            if (messageCount === 0) {
                event = dotprop.set(event, `payload.tags.$end`, ChatEntryTags.first);
            }

        }

        yield put(event);
    }
}

function createTmiChannel(client: tmi.Client): any {
    return eventChannel((emit) => {

        console.log('Create Event Handler');

        client.on('connected', async (e) => {
            console.log('Connected!');
            emit(chatActions.connected());
        });


        client.on('chat', (channel, userstate: tmi.ChatUserstate, message, self) => {
            emit(chatMessage({
                id: userstate.id,
                type: ChatEntryType.chat,
                timestamp: new Date(),
                message,
                userstate,
            }));
        });


        client.on('cheer', (channel, userstate: tmi.ChatUserstate, message) => {
            emit(chatMessage({
                id: userstate.id,
                type: ChatEntryType.cheer,
                timestamp: new Date(),
                message,
                userstate,
            }));
        });

        client.on('subscription', (channel: string, username: string, methods: SubMethods, message: string, userstate: SubUserstate) => {
            emit(chatMessage({
                id: userstate.id,
                type: ChatEntryType.sub,
                timestamp: new Date(),
                message: message,
                userstate,
            }));
        });

        client.on('resub', (channel: string, username: string, months: number, message: string, userstate: SubUserstate, methods: SubMethods) => {
            emit(chatMessage({
                id: userstate.id,
                type: ChatEntryType.sub,
                timestamp: new Date(),
                message: message,
                userstate,
            }));
        });


        client.on('submysterygift', (channel: string, username: string, numbOfSubs: number, methods: SubMethods, userstate: SubMysteryGiftUserstate) => {
            emit(chatMessage({
                id: userstate.id,
                type: ChatEntryType.subgift,
                timestamp: new Date(),
                message: `hat ${numbOfSubs} Subs verschenkt!`,
                userstate,
            }));
        });


        client.on('subgift', (channel: string, username: string, streakMonths: number, recipient: string, methods: SubMethods, userstate: SubGiftUserstate) => {
            emit(chatMessage({
                id: userstate.id,
                type: ChatEntryType.subgift,
                timestamp: new Date(),
                message: `hat ein Abo an ${recipient} verschenkt!`,
                userstate,
            }));
        });

        client.on('messagedeleted', (channel: string, username: string, deletedMessage: string, userstate: DeleteUserstate) => {
            emit(chatMessageDeleted({
                channel: channel,
                username: username,
                deletedMessage: deletedMessage,
                messageId: userstate['target-msg-id'],
            }));
        });

        client.on('action', (channel, userstate: tmi.ChatUserstate, message, self) => {
            console.log('msg', channel, userstate, message, self);
            emit(chatMessage({
                id: userstate.id,
                type: ChatEntryType.action,
                userstate,
                message,
                timestamp: new Date(),
            }));
        });

        client.on('raided', (channel: string, username: string, viewers: number) => {
            emit(chatMessage({
                type: ChatEntryType.raid,
                message: `raidet mit ${viewers} Personen!`,
                userstate: {
                    'display-name': username,
                },
                timestamp: new Date(),
            }));
        });

        client.on('notice', (channel, msgid, message) => {
            console.log('notice', channel, msgid, message);
        });

        client.on('join', (channel, username, self) => {
            if (self) {
                emit(chatActions.channelJoined(channel.substr(1)));
                emit(chatMessage({
                    id: new Date().toISOString(),
                    type: ChatEntryType.status,
                    timestamp: new Date(),
                    message: `Verbunden mit ${channel}`,
                    userstate: {},
                }));
            }
        });

        // setTimeout(() => {
        //     emit(chatMessage({
        //         id: 'xxxxxx',
        //         type: ChatEntryType.cheer,
        //         timestamp: new Date(),
        //         message: 'Yoooo Cheer100 krissitvCheer100 Cheer100 Hey Nice Party1000 Party5 ',
        //         userstate: {
        //             'display-name': 'test',
        //             bits: '2000',
        //         },
        //     }));
        // }, 1000);


        setTimeout(() => {
            // emit(chatMessage({
            //     type: ChatEntryType.cheer,
            //     timestamp: new Date(),
            //     message: "yolo Cheer100",
            //     userstate: {
            //         "display-name": "sixi",
            //         bits: 200,
            //     },
            // }));
            //
            // emit(chatMessage({
            //     type: ChatEntryType.sub,
            //     timestamp: new Date(),
            //     message: `${"Nachricht"}`,
            //     userstate: {
            //         "display-name": 'sixi',
            //         "msg-param-sub-plan-name": 'Tier 1',
            //         'msg-param-sub-plan': 'Prime',
            //         'msg-param-cumulative-months': '3',
            //     },
            // }))
            // emit(chatMessage({
            //     type: ChatEntryType.raid,
            //     message: `raidet mit 22 Personen!`,
            //     userstate: {
            //         "display-name": 'sixi',
            //     },
            //     timestamp: new Date(),
            // }));
        }, 1000);

        return async () => {
            console.log('Client unsubscribe');
            await client.disconnect();
        };
    });
}


let client: (tmi.Client | undefined) = undefined;

function* createClient(userId?: string, token?: string) { //
    console.log('XXXX CreateClient!', userId, token);

    if (!client) {
        client = tmi.client({
            options: {
                debug: CONFIG.DEBUG,
                messagesLogLevel: CONFIG.DEBUG ? 'info' : 'error',
                clientId: CONFIG.TWITCH_CLIENT_ID,
            },
            connection: {
                secure: true,
                reconnect: true,
            },
            identity: {
                username: userId,
                password: token && `oauth:${token}`,
            },
            channels: [],
        });
        yield fork(init, client);
        yield delay(100);
        yield client.connect();


    }
    // else {
    //     yield fork(init, client);
    //     console.log('reuse client');
    //     yield client.connect();
    //     let channelName: string = yield select(chatSelectors.getChannelName);
    //     try {
    //         yield client.part(channelName);
    //     } catch (e) {
    //
    //     }
    //     try {
    //         yield client.join(channel);
    //         yield put(chatActions.channelJoined(channel));
    //
    //     } catch (e) {
    //
    //     }
    // }

    return () => {
        console.log('Create Client - Canceled');
    };
}

function* deleteMessage({ payload: { msgId } }: PayloadAction<string, DeleteMessageActionPayload>) {
    const channelName: string = yield select(chatSelectors.getChannelName);
    if (client) {
        try {
            yield client.deletemessage(channelName, msgId);
        } catch (e) {
            console.log(e);
        }
    }
}

function* timeoutUser({ payload: { duration, reason, username } }: PayloadAction<string, TimeoutActionPayload>) {
    const channelName: string = yield select(chatSelectors.getChannelName);
    if (client) {
        try {
            yield client.timeout(channelName, username, duration, reason);
        } catch (e) {
            console.log(e);
        }
    }
}


export function* isModerator(channel: string, username: string,) {
    if(channel === username)
        return true;

    if(client){
        return (yield client.isMod(channel, username)) as boolean;
    }
    return false;
}



function* handleChannels() {
    let currentChannel: (string | undefined) = yield select(chatSelectors.getChannelName);

    while (true) {
        let { payload: channel }: PayloadAction<string, string> = yield take(chatActions.selectChannel.type);
        console.log('Current channel', currentChannel, 'new', channel);
        currentChannel = yield select(chatSelectors.getChannelName);
        if (currentChannel && client) {
            try {
                yield client.part(currentChannel);
            } catch (e) {
                console.log('Error parting channel');
            }
        }
        if (client) {
            yield client.join(channel);
        }
    }

}

function* resetClient() {
    if (client) {
        try {
            yield client.disconnect();
        } catch (e) {
            console.log('Client not connected');
        }
        client = undefined;
    }
}

function* joinSelectedChannel() {
    console.log('waiting for connection');
    yield take(chatActions.connected.type);
    let channel: string = yield select(chatSelectors.getChannelName);
    console.log('current channel?', channel);
    if (client) {
        // @ts-ignore
        yield client.join(channel);
    }
}

function* createAuthedClient({ payload: token }: PayloadAction<string, string>) {
    yield call(resetClient);

    yield fork(joinSelectedChannel);

    let { payload: userInfo }: { payload: TwitchUserInfo } = yield take(twitchActions.userInfoReceived.type);
    yield call(createClient, userInfo.login, token);


}

function* createAnonymousClient() {
    yield call(resetClient);
    yield fork(joinSelectedChannel);
    yield call(createClient, undefined, undefined);

}


export default function* chatSaga() {


    yield fork(handleChannels);

    // yield takeLatest(chatActions.selectChannel.type, handleChannels)

    // yield fork(createClient, undefined, undefined);
    yield takeLatest(authActions.processToken.type, createAuthedClient);
    yield takeLatest(authActions.logout.type, createAnonymousClient);

    // @ts-ignore
    if (yield take(authActions.processToken.type)) {
        yield takeLatest(chatActions.deleteMessage.type, deleteMessage);
        yield takeLatest(chatActions.timeoutUser.type, timeoutUser);
    }


}
