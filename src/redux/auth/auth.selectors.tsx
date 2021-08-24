import {createSelector} from 'reselect';
import {AuthStateType} from "./auth.types";

const getSubState = (state: any) => state.auth as AuthStateType;


const getToken = createSelector(getSubState, state => state.token);
const isLoggedIn = createSelector(getSubState, state => !!state.token);

const isInLoginProcess = createSelector(getSubState, state => state.loginProcess)


export default {
    isLoggedIn,
    getToken,
    isInLoginProcess
};
