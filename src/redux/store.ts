import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootSaga from "./saga";
import { createBrowserHistory } from 'history';

import { routerMiddleware } from 'connected-react-router'
import createRootReducer from "./reducers";


export const history = createBrowserHistory({basename: '/minimal-twitch-chat-react/'})

const sagaMiddleware = createSagaMiddleware();

const rootReducer = createRootReducer(history);

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, routerMiddleware(history), logger));

sagaMiddleware.run(rootSaga);

export default store;
