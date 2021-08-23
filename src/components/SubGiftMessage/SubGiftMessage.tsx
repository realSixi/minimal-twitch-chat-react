import React from 'react';
import './SubGiftMessage.less';
import BasicChatEntry from "../BasicChatEntry/BasicChatEntry";
import {getColor} from "../../helper/ColorHelper";
import {createEmoteMessage} from "../../helper/EmoteHelper";
import {ChatEntry} from "../../redux/chat/chat.types";

const SubGiftMessage = ({message}: { message: ChatEntry }) => {
    return (
        <BasicChatEntry timestamp={message.timestamp}
                        className={'bg-purple-800 bg-opacity-70'}
                        type={message.type}
                        usercolor={message.userstate.color || getColor(message.userstate['display-name'] || String(Math.random()))}
                        username={message.userstate['display-name']}
                        message={createEmoteMessage(message.message, message.userstate.emotes)}/>
    );
};

export default SubGiftMessage;
