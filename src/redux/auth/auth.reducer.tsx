import { AuthStateType } from './auth.types';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth.actions';


const initialState: AuthStateType = {};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(authActions.processToken, (state, action) => {
            return {
                ...state,
                token: action.payload,
            }
        })
        .addCase(authActions.logout, (state, action) => {
            return initialState;
        })
});

export default reducer;
