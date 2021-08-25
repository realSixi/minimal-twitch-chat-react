import React, { useEffect } from 'react';
import './Chat.less';
import { useDispatch, useSelector } from 'react-redux';
import { chatActions, chatSelectors } from '../../redux/chat';
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import { ChatEntryType } from '../../redux/chat/chat.types';
import CheerMessage from '../../components/CheerMessage/CheerMessage';
import RaidMessage from '../../components/RaidMessage/RaidMessage';
import SubMessage from '../../components/SubMessage/SubMessage';
import SubGiftMessage from '../../components/SubGiftMessage/SubGiftMessage';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
import ChatMessageAdminMenu from './ChatMessageAdminMenu';
import StatusMessage from '../../components/StatusMessage/StatusMessage';


const Chat = ({}) => {

    const dispatch = useDispatch();
    const messages = useSelector(chatSelectors.getMessages);

    const location = useLocation();
    const searchParams = qs.parse(location.search);
    console.log('loc', searchParams);

    useEffect(() => {
        if (searchParams.channel) {
            dispatch(chatActions.selectChannel(searchParams.channel as string));
        }
    }, [searchParams.channel]);

    return (
        <div className='chat bg-gray '>
            {
                messages
                    .filter(msg => {
                        if (!msg.message || msg.message.length === 0)
                            return true;

                        let length = msg.message.length;
                        let words = msg.message.split(' ').length;
                        let noteCount = msg.message.match(/([a-zA-Z]+\W*\d+)/g);
                        let wordLengthRatio = words / length;

                        if (msg.type !== ChatEntryType.chat) {
                            return true;
                        }

                        if (msg.message.length === 1) {
                            return false;
                        } else if (msg.message.startsWith('!bandit')) {
                            return false;
                        } else if (msg.message.startsWith('!marble')) {
                            return false;
                        } else if (msg.message.startsWith('!song')) {
                            return false;
                        } else if (msg.message.indexOf('https://www.thingiverse.com') > -1) {

                        } else if (msg.userstate.username === 'projektionbot') {
                            return false;
                        } else if (msg.userstate.username === 'streamelements') {
                            return false;
                        } else if (msg.userstate.username === 'nightbot') {
                            return false;
                        } else if (msg.userstate.username === 'sascha_lbot') {
                            return false;
                        } else if (msg.message.match(/~\d+/)) {
                            return false;
                        } else if ((noteCount || []).length > 10 && wordLengthRatio > 0.1) {
                            return false;
                        }
                        return true;
                    })
                    .map((msg, index) => {
                        switch (msg.type) {
                            case ChatEntryType.cheer:
                                return <CheerMessage key={msg.userstate['id']} message={msg} />;
                            case ChatEntryType.raid:
                                return <RaidMessage key={msg.userstate['id']} message={msg} />;
                            case ChatEntryType.sub:
                                return <SubMessage key={msg.userstate['id']} message={msg} />;
                            case ChatEntryType.subgift:
                                return <SubGiftMessage key={msg.userstate['id']} message={msg} />;
                            case ChatEntryType.status:
                                return <StatusMessage key={msg.userstate['id'] || msg.id} message={msg} />;
                        }


                        return <div key={msg.userstate['id']} className={'w-full flex flex-1'}>
                            <div className={'flex-1 -my-1'}>
                                <ChatMessage
                                    message={msg} />
                            </div>
                            {/*TODO: add later -> check if mod / admin first*/}
                            {/*<div className={''}>*/}
                            {/*    <ChatMessageAdminMenu message={msg}/>*/}
                            {/*</div>*/}
                        </div>;

                    })
            }
        </div>
    );
};

export default Chat;
