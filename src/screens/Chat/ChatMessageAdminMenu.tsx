import { chatActions } from '../../redux/chat';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
import React from 'react';
import { ChatEntry } from '../../redux/chat/chat.types';
import { useDispatch } from 'react-redux';
import {DotsHorizontalIcon} from '@heroicons/react/solid';

interface Props  {
    message: ChatEntry,
}

const ChatMessageAdminMenu = ({message} : Props) => {

    const dispatch = useDispatch();

    return <DropDownMenu
        className={'mr-4'}
        origin={'origin-top-left'}
        buttonComponent={<DotsHorizontalIcon className={'w-6'}/>} items={[
        {
            title: 'Löschen', onClick: () => {
                if (message.id) {
                    dispatch(chatActions.deleteMessage({ msgId: message.id }));
                }
            },
        },
        {
            title: 'Timeout', onClick: () => {
                if (message.id) {
                    dispatch(chatActions.timeoutUser({
                        username: message.userstate.username,
                        duration: 10 * 60,
                        reason: 'Test',
                    }));
                }
            },
        },
    ]} />
}

export default ChatMessageAdminMenu
