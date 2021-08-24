import { createAction } from '@reduxjs/toolkit';


export const processToken = createAction<string, 'login/token'>('login/token');
export const logout = createAction('login/logout');


const login = createAction('login/login');


export default {
    processToken,
    logout,
    login,
};
