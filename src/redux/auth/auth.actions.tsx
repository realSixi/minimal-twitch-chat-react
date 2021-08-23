import { createAction } from '@reduxjs/toolkit';


export const processToken = createAction<string, 'login/token'>('login/token');
export const logout = createAction('login/logout');


export default {
    processToken,
    logout,
};
