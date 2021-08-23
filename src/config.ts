import dotenv from 'dotenv';
dotenv.config();

const CONFIG = {
    TWITCH_CLIENT_ID: '1lk526oh4rsbzwcqowmcuc4m9agza3',
    DEBUG: process.env.NODE_ENV === 'development',
}

export default CONFIG;
