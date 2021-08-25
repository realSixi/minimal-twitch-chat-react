import React from 'react';
import './CheerMessage.less';
import BasicChatEntry from '../BasicChatEntry/BasicChatEntry';
import { ChatEntry } from '../../redux/chat/chat.types';
import { getColor } from '../../helper/ColorHelper';
import { createCheerMessage, createEmoteMessage } from '../../helper/EmoteHelper';
import { useSelector } from 'react-redux';
import { twitchSelectors } from '../../redux/twitch';

const CheerMessage = ({message}: { message: ChatEntry }) => {

    const cheermotes = useSelector(twitchSelectors.getCheermotes);
    console.log("Custom CheerMotes", cheermotes)

    return (

        <BasicChatEntry timestamp={message.timestamp}
                        type={message.type}
                        className={'bg-blue-800 bg-opacity-70'}
                        usercolor={message.userstate.color || getColor(message.userstate['display-name'] || String(Math.random()))}
                        username={`${message.userstate["display-name"]} hat ${message.userstate.bits} Bits gecheered`}
                        message={createCheerMessage(createEmoteMessage(message.message, message.userstate.emotes), cheermotes)}
                        tags={message.tags}
        />
    );
};

export default CheerMessage;
