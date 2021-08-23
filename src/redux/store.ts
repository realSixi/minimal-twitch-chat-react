import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from './saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import CONFIG from '../config';


const persistConfig = {
    key: 'minimal-twitch-chat',
    storage,
    blacklist: ['auth', 'twitch'],
};

export const history = createBrowserHistory({ basename: '/minimal-twitch-chat-react/' });

const sagaMiddleware = createSagaMiddleware();

const rootReducer = createRootReducer(history);

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store: Store;
// if (process.env.NODE_ENV === 'development') {
store = createStore(persistedReducer, applyMiddleware(sagaMiddleware, routerMiddleware(history), logger));


sagaMiddleware.run(rootSaga);


export const persistor = persistStore(store);

export default store;
