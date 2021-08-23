import React from 'react';
import './RaidMessage.less';
import { ChatEntry } from '../../redux/chat/chat.types';
import { getColor } from '../../helper/ColorHelper';
import { createEmoteMessage } from '../../helper/EmoteHelper';
import BasicChatEntry from '../BasicChatEntry/BasicChatEntry';

const RaidMessage = ({ message }: { message: ChatEntry }) => {
    return (
        <BasicChatEntry timestamp={message.timestamp}
                        className={'bg-yellow-700'}
                        type={message.type}
                        userClassName={'dark:text-gray-900'}
                        username={message.userstate['display-name']}
                        messageClassName={'dark:text-gray-900'}
                        message={createEmoteMessage(message.message, message.userstate.emotes)} />
    );
};

export default RaidMessage;
