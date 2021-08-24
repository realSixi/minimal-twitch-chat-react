import React from 'react';
import BasicChatEntry from '../BasicChatEntry/BasicChatEntry';
import { ChatEntry } from '../../redux/chat/chat.types';

const StatusMessage = ({ message }: { message: ChatEntry }) => {
    return (
        <BasicChatEntry timestamp={message.timestamp}
                        className={'bg-gray-800 bg-opacity-70'}
                        messageClassName={'italic text-purple-500'}
            // usercolor={message.userstate.color || getColor(message.userstate['display-name'] || String(Math.random()))}
            // username={`${message.userstate["display-name"]} hat ein Abo (${message.userstate['msg-param-sub-plan']}) im ${message.userstate['msg-param-cumulative-months']}. Monat abgeschlossen: `}
            // message={createEmoteMessage(message.message, message.userstate.emotes)}/>
                        message={message.message}
        />
    );
};

export default StatusMessage;
