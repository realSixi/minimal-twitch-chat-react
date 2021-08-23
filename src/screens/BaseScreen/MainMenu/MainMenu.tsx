import React from 'react';
import './MainMenu.less';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, authSelectors } from '../../../redux/auth';
import { twitchSelectors } from '../../../redux/twitch';
import UserInfo from '../../../components/Menu/UserInfo/UserInfo';
import DropDownMenu from '../../../components/DropDownMenu/DropDownMenu';
import { push } from 'connected-react-router';
import { MenuIcon } from '@heroicons/react/outline';
import ChatInput from '../../../components/ChatInput/ChatInput';
import { chatActions, chatSelectors } from '../../../redux/chat';
import CONFIG from '../../../config';

const MainMenu = ({}) => {

        const isLoggedIn = useSelector(authSelectors.isLoggedIn);
        const user = useSelector(twitchSelectors.getUser);

        const streamInfo = useSelector(twitchSelectors.getStreamInfo);

        const currentChannel = useSelector(chatSelectors.getChannelName);

        const dispatch = useDispatch();

        return (
            <menu className={'text-white bg-indigo-900 flex flex-row h-12 space-x-2 items-center p-2 fixed w-full top-0'}>


                <DropDownMenu
                    origin={'origin-top-right'}
                    buttonComponent={<MenuIcon
                        className={'bg-gray-800 hover:bg-indigo-500 transition rounded-full p-1 w-8'} />}
                    items={[
                        {
                            title: 'Chat',
                            onClick: () => {
                                dispatch(push('/'));
                            },
                        },
                        isLoggedIn && {
                            title: 'Kanäle',
                            onClick: () => {
                                dispatch(push('/channels'));
                            },
                        },

                    ].filter((a => a))}
                />


                {!isLoggedIn && (
                    <div className={'text-white'}>
                        <a href={`https://id.twitch.tv/oauth2/authorize?client_id=${CONFIG.TWITCH_CLIENT_ID}&redirect_uri=${window.location.origin}/minimal-twitch-chat-react/login/callback&force_verify=false&response_type=token&scope=${encodeURIComponent('chat:edit chat:read channel:moderate')}&claims=sub,exp`}>Anmelden</a>
                    </div>
                )}

                <ChatInput
                    onSubmit={(channel) => {
                        dispatch(chatActions.selectChannel(channel));
                    }}
                    currentChannel={currentChannel} />

                <div className={'flex flex-1 flex-shrink flex flex-row truncate'}>
                    {streamInfo && (

                            <div className={'stream-info flex flex-1 items-center flex-shrink space-x-4 truncate'}>
                                <div
                                    className={'bg-purple-500 text-sm rounded-full items-center justify-center flex-shrink-0 flex p-1 px-2'}>
                                    {streamInfo.viewer_count}<span className={'hidden lg:block'}>&nbsp;Zuschauer</span>
                                </div>
                                <div className={'flex-shrink truncate'}>{streamInfo.title}</div>
                            </div>


                    )}
                </div>


                <div className={'flex-shrink-0  flex self-align-end'}>
                    {user && (
                        <DropDownMenu
                            origin={'origin-top-left'}
                            items={[
                                {
                                    title: 'Einstellungen',
                                    onClick: () => {
                                        dispatch(push('/settings'));
                                    },
                                },
                                {
                                    title: 'Abmelden',
                                    onClick: () => {
                                        dispatch(authActions.logout());
                                    },
                                },
                            ]}
                            buttonComponent={
                                <UserInfo user={user} />
                            } />
                    )}
                </div>
            </menu>
        );
    }
;

export default MainMenu;
