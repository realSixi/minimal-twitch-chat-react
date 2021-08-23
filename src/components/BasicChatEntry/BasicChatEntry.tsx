import React, { ReactNode } from 'react';
import './BasicChatEntry.less';
import dayjs from 'dayjs';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { chatSelectors } from '../../redux/chat';
import { Userstate } from 'tmi.js';
import { ChatEntry, ChatEntryType } from '../../redux/chat/chat.types';
import ChatMessage from '../ChatMessage/ChatMessage';

type Props = {
    timestamp: Date,
    username?: string,
    usercolor?: string,
    userClassName?: string,
    message: string | ReactNode,
    messageColor?: string,
    messageClassName?: string,
    className?: string,
    userstate?: Userstate,
    subMessages?: ChatEntry[],
    type?: ChatEntryType,
}

const BasicChatEntry = ({
                            timestamp,
                            usercolor,
                            username,
                            message,
                            messageClassName,
                            messageColor,
                            className,
                            userClassName,
                            userstate,
                            subMessages,
                            type,
                        }: Props) => {

    let messageCount = useSelector(chatSelectors.getMessageCount(username));

    return (
        <div className={'m-2'}>
            <div className={clsx('chat-message shadow-md flex p-2 rounded-md space-x-2 text-2xl', className)}>

                <div
                    className={'flex-shrink-0 leading-9 text-sm w-14 text-gray-600'}>{dayjs(timestamp).format('HH:mm:ss')}</div>
                <div style={{ minWidth: '1.2rem' }}
                     className={'flex-shrink-0 space-x-1 text-sm h-9 flex items-center content-center text-gray-900'}>
                    {type === ChatEntryType.chat && messageCount === 1 && (

                        <div
                            className={'text-gray-900 text-sm inline-block bg-pink-600 flex items-center justify-center rounded-full w-5 text-center h-5'}>
                            #1
                        </div>

                    )}
                    {(userstate && userstate['custom-reward-id']) && (
                        <div
                            className={'text-gray-900 text-sm inline-block bg-indigo-900 flex items-center justify-center rounded-full w-5 text-center h-5'}>
                            R
                        </div>
                    )}
                </div>


                <div>
                <span
                    style={{ color: usercolor }}
                    className={clsx(userClassName)}>{username} </span>

                    <span
                        style={{ color: messageColor }}
                        className={clsx(
                            'flex-1',
                            messageClassName || 'dark:text-gray-300',
                        )}>{message}</span>
                </div>
            </div>


            {subMessages && subMessages.map((msg => {
                return <div className={'ml-4 -mr-2 '}>
                    <ChatMessage message={msg} />
                </div>;
            }))}
        </div>
    );
};

export default BasicChatEntry;
