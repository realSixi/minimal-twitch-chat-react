import React from 'react';
import './SubMessage.less';
import {getColor} from "../../helper/ColorHelper";
import {createEmoteMessage} from "../../helper/EmoteHelper";
import BasicChatEntry from "../BasicChatEntry/BasicChatEntry";
import {ChatEntry} from "../../redux/chat/chat.types";

const SubMessage = ({message}: { message: ChatEntry }) => {
    return (
        <BasicChatEntry timestamp={message.timestamp}
                        className={'bg-purple-900 bg-opacity-70'}
                        usercolor={'#ddd'}
                        username={`${message.userstate["display-name"]} hat ein Abo (${message.userstate['msg-param-sub-plan']}) im ${message.userstate['msg-param-cumulative-months']}. Monat abgeschlossen: `}
                        message={createEmoteMessage(message.message, message.userstate.emotes)}
                        tags={message.tags}
        />
    );
};

export default SubMessage;
