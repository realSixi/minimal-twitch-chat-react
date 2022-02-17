import { take } from 'redux-saga/effects';
import { Saga } from 'redux-saga';
import { AnyAction } from 'redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';


type ActionsHashObject = { [key: string]: AnyAction | PayloadAction<any, any> };

export function* combineLatest(actionTypes: string[], saga: any) {
    let actions: ActionsHashObject = {};
    while (true) {
        const action: AnyAction = yield take(actionTypes);
        actions[action.type] = action;

        if (allActionsReady(actions, actionTypes))
            yield saga(actionTypes.map(t => actions[t]));
    }
}

export function findAction<T>(requestedAction: ActionCreatorWithPayload<T, string>, actions: PayloadAction<string, T>[]) {
    return actions.find(a => a.type === requestedAction.type) as PayloadAction<string, T>;
}

function allActionsReady(actions: ActionsHashObject, actionTypes: string[]) {
    return Object.keys(actions).length === actionTypes.length;
}
