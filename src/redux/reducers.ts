import {combineReducers} from "redux";
import chatReducer from './chat'
import authReducer from './auth'
import twitchReducer from './twitch'
import {connectRouter} from "connected-react-router";





const createRootReducer = (history : any ) => {
    const rootReducer = combineReducers({
        chat: chatReducer,
        auth: authReducer,
        router: connectRouter(history),
        twitch: twitchReducer,
    })
    return rootReducer;
}

export default createRootReducer
