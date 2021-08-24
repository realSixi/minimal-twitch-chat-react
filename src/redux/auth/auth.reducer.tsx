import { AuthStateType } from './auth.types';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth.actions';


const initialState: AuthStateType = {
    loginProcess: false
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(authActions.processToken, (state, action) => {
            return {
                ...state,
                token: action.payload,
                loginProcess: false,
            }
        })
        .addCase(authActions.logout, (state, action) => {
            return initialState;
        })
        .addCase(authActions.login, (state, action) => {
            return {
                ...state,
                loginProcess: true,
            }
        })
});

export default reducer;
