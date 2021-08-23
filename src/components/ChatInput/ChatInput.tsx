import React, { useState } from 'react';
import './ChatInput.less';
import { ArrowCircleRightIcon, CheckCircleIcon } from '@heroicons/react/outline';
import clsx from 'clsx';

interface Props {
    currentChannel?: string,
    onSubmit?: (channel: string) => (void),
    className?: string,
}

const ChatInput = ({ currentChannel, onSubmit, className }: Props) => {

    const [value, setValue] = useState('');

    return (
        <div className={clsx('chat-input items-center flex space-x-1', className)}>
            <input
                className={'bg-white text-black border-0 rounded-full h-7 px-4'}
                value={value}
                placeholder={currentChannel}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        if (onSubmit)
                            onSubmit(value);
                    }
                }}
                onChange={e => {
                    setValue(e.target.value);
                }}

            />

            {value.length === 0 || value === currentChannel ? (
                <CheckCircleIcon className={'w-8 '} />
            ) : (
                <ArrowCircleRightIcon
                    onClick={() => {
                        if (onSubmit && value && value.length > 0)
                            onSubmit(value);
                    }}
                    className={'w-8 cursor-pointer'} />
            )}


        </div>
    );
};

export default ChatInput;
