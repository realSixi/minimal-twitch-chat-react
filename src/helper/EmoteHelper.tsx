import React, { ReactNode } from 'react';
import { TwitchCheermotes } from '../redux/twitch/twitch.types';
import defaultCheerMotes from './cheermotes.json';


const getCheermoteImageUrl = (name: string, amount: number, customCheerMotes: TwitchCheermotes[] | undefined) => {
    let cheerMotes = defaultCheerMotes as TwitchCheermotes[];

    let foundCheerMote = cheerMotes.find(c => c.prefix === name) || (customCheerMotes || []).find(c => c.prefix === name);
    if (foundCheerMote) {
        let tier = foundCheerMote?.tiers
            .slice()
            .sort((a, b) => b.min_bits - a.min_bits)
            .find(t => amount >= t.min_bits);
        return tier;
    }
    return undefined;
};

export const createCheerMessage = (message: ReactNode[], customCheerMotes: TwitchCheermotes[] | undefined) => {

    let result = message.flatMap(msg => {
        if (typeof msg === 'string') {
            const splitted = msg.split(/([A-Za-z]+\d+)/g);
            if (splitted) {
                let msgArray = splitted.map(m => {
                    let [_, name, amount] = m.match(/([A-Za-z]+)(\d+)/) || [];
                    if (!name || !amount) {
                        return m;
                    }
                    let cheer = getCheermoteImageUrl(name, parseInt(amount), customCheerMotes);
                    if (cheer) {
                        return <span style={{ color: cheer.color }}>
                        {' '}
                            <img
                                className={'inline w-8'}
                                src={cheer.images.dark.animated['2']} />
                        <span className={'text-sm'}>
                            {amount}
                        </span>{' '}
                    </span>;
                    }
                    return m;
                });
                return msgArray;
            }
        }
        return msg;
    });


    return result;
};

export const createEmoteMessage = (message: string, emotes: { [emoteid: string]: string[] } | undefined) => {
    if (!emotes)
        return [message];


    let msgArray: ReactNode[] = [];


    const replacements: { stringToReplace: string, replacement: ReactNode, start: number }[] = [];

    Object.entries(emotes || [])
        .forEach(([emoteId, positions]) => {
            Object.values(positions as any)
                .forEach((position, index) => {
                    let [start, end] = (position as string).split('-');

                    replacements.push({
                        start: parseInt(start),
                        stringToReplace: message.substring(parseInt(start), parseInt(end) + 1),
                        replacement: <img style={{ display: 'inline', width: '1.1em' }}
                                          key={`emote-${emoteId}-${index}`}
                                          src={`https://static-cdn.jtvnw.net/emoticons/v2/${emoteId}/default/dark/2.0`} />,
                    });
                });
        });

    let tmpMsg = message;
    replacements
        .sort((a, b) => a.start - b.start)
        .forEach(({ stringToReplace, replacement }) => {
            if (tmpMsg) {
                let splitted = tmpMsg.split(stringToReplace);
                msgArray.push(splitted[0]);
                msgArray.push(replacement);
                tmpMsg = tmpMsg.replace(splitted[0], '').replace(stringToReplace, '');
            }
        });
    msgArray.push(tmpMsg);

    return msgArray;
};
