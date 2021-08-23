import React, { ReactNode } from 'react';


export const createCheerMessage = (message: ReactNode[]) => {
    let result = message.map(msg => {
        if (typeof msg === 'string') {

            let m = msg.match(/([a-zA-Z]*)(\d+)/);
        }
        return msg;
    });


    return message;
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
