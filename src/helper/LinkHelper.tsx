import {ReactNode} from "react";


export const createLinks = (message: ReactNode[]) => {
    return message.map(msg => {
        if (typeof msg === 'string') {
            const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
            return msg
                .split(" ")
                .map(part => URL_REGEX.test(part) ?
                    <a className={'text-pink-300'}
                       key={part}
                       target={'_blank'} href={part}>{part} </a> : part + " "
                );
        }
        return msg;
    })

}
