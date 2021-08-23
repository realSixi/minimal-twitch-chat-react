import React from 'react';
import './CheerMessage.less';
import BasicChatEntry from "../BasicChatEntry/BasicChatEntry";
import {ChatEntry} from "../../redux/chat/chat.types";
import {getColor} from "../../helper/ColorHelper";
import {createEmoteMessage, createCheerMessage} from "../../helper/EmoteHelper";

const CheerMessage = ({message}: { message: ChatEntry }) => {
    return (

        <BasicChatEntry timestamp={message.timestamp}
                        type={message.type}
                        className={'bg-blue-800 bg-opacity-70'}
                        usercolor={message.userstate.color || getColor(message.userstate['display-name'] || String(Math.random()))}
                        username={`${message.userstate["display-name"]} hat ${message.userstate.bits} Bits gecheered`}
                        message={createCheerMessage(createEmoteMessage(message.message, message.userstate.emotes))}/>
    );
};

export default CheerMessage;
