import { call, cancel, delay, fork, put, race, select, take, takeLatest } from 'redux-saga/effects';
import tmi, { DeleteUserstate, SubGiftUserstate, SubMethods, SubMysteryGiftUserstate, SubUserstate } from 'tmi.js';
import { eventChannel, Task } from 'redux-saga';
import chatActions, { chatMessage, chatMessageDeleted } from './chat.actions';
import { ChatEntry, ChatEntryType, DeleteMessageActionPayload, TimeoutActionPayload } from './chat.types';
import { chatSelectors } from './index';
import { authActions } from '../auth';
import { TwitchUserInfo } from '../twitch/twitch.types';
import { twitchActions } from '../twitch';
import { Action } from 'redux';
import CONFIG from '../../config';


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

        const event: PayloadAction<'message', ChatEntry> = yield take(chatChannel);


        yield put(event);
    }
}

function createTmiChannel(client: tmi.Client): any {
    return eventChannel((emit) => {

        client.on('connected', async (e) => {
            console.log('Connected!');
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
        })

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

function* createClient(channel: string, userId?: string, token?: string) { //
    console.log('Create Client...', channel, userId, token);

    if (!client) {
        client = tmi.client({
            options: {
                debug: true,
                messagesLogLevel: 'info',
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
            channels: [channel],
        });
        yield client.connect();


        yield put(chatActions.channelJoined(channel));
        yield fork(init, client);

        yield delay(1000);
        // if(channel === 'realsixi'){
        //     // yield client.say('#'+channel, "Moin!");
        //     // yield client.ban(channel, "nightbot", "test");
        //     // client.tim
        // }
    } else {
        let channelName: string = yield select(chatSelectors.getChannelName);
        try {
            yield client.part(channelName);
        } catch (e) {

        }
        try {
            yield client.join(channel);
            yield put(chatActions.channelJoined(channel));
            yield fork(init, client);
        } catch (e) {

        }
    }

    return () => {
        console.log("Create Client - Canceled")
    }
}

function* deleteMessage({payload: {msgId}} : PayloadAction<string, DeleteMessageActionPayload>){
    const channelName: string = yield select(chatSelectors.getChannelName);
    if(client){
        try{
            yield client.deletemessage(channelName, msgId);
        } catch(e){
            console.log(e);
        }
    }
}

function* timeoutUser({payload: {duration, reason, username}} : PayloadAction<string, TimeoutActionPayload>){
    const channelName: string = yield select(chatSelectors.getChannelName);
    if(client){
        try{
            yield client.timeout(channelName, username, duration, reason);
        } catch(e){
            console.log(e);
        }
    }
}



export default function* chatSaga() {
    console.log('init chat!');

    yield takeLatest(chatActions.deleteMessage.type, deleteMessage)
    yield takeLatest(chatActions.timeoutUser.type, timeoutUser)

    let channel = undefined;
    let token = undefined;
    let user = undefined;

    let chatTask: (Task | undefined) = undefined;

    while (true) {
        let {
            selectChannel,
            userInfoReceived,
            tokenReceived,
        }: { selectChannel: PayloadAction<string, string>, userInfoReceived: PayloadAction<string, TwitchUserInfo>, tokenReceived: PayloadAction<string, string> } = yield race({
            selectChannel: take(chatActions.selectChannel.type),
            userInfoReceived: take(twitchActions.userInfoReceived.type),
            tokenReceived: take(authActions.processToken.type),
        });

        if (tokenReceived) {
            token = tokenReceived.payload;
        } else if (selectChannel) {
            channel = selectChannel.payload;
        } else if (userInfoReceived) {
            user = userInfoReceived.payload;
        }

        console.log("Race Completed");

        if(chatTask){
            yield cancel(chatTask);
        }

        if (channel) {
            chatTask = yield fork(createClient, channel, user?.login, token);
        }

    }


    // let {payload} = yield take(chatActions.selectChannel.type);
    // yield call(createClient, payload)
}
