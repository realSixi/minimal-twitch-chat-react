import React from 'react';
import './ChatMessage.less';
import { getColor, isDark } from '../../helper/ColorHelper';
import { ChatEntry } from '../../redux/chat/chat.types';
import BasicChatEntry from '../BasicChatEntry/BasicChatEntry';
import { createEmoteMessage } from '../../helper/EmoteHelper';
import { createLinks } from '../../helper/LinkHelper';
import clsx from 'clsx';

const ChatMessage = ({ message }: { message: ChatEntry }) => {

    const randomUserColor = getColor(message.userstate['display-name'] || String(Math.random()));
    return (
        <BasicChatEntry timestamp={message.timestamp}
                        type={message.type}
                        className={'bg-gray-900'}
                        userstate={message.userstate}
                        username={message.userstate['display-name']}
                        usercolor={message.userstate.color ? isDark(message.userstate.color) ? randomUserColor : message.userstate.color : null || randomUserColor}
                        message={createLinks(createEmoteMessage(message.message, message.userstate.emotes))}
                        subMessages={message.subMessages}
                        messageClassName={clsx([
                            message.deleted && 'text-gray-600',
                            message.userstate['message-type'] === 'action' && 'italic',

                        ])}

        />
    );
};

export default ChatMessage;
