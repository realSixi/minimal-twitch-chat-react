import React from 'react';

import Chat from "./screens/Chat/Chat";
import {Provider} from "react-redux";
import store, {history} from "./redux/store";

import {ConnectedRouter} from 'connected-react-router'
import AuthHandler from "./screens/Auth/AuthHandler";
import BaseScreen from "./screens/BaseScreen/BaseScreen";
import {Route, Switch} from "react-router-dom";
import ChannelList from "./screens/ChannelList/ChannelList";


function App() {
    return (
        <div className="App dark:bg-black">
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <AuthHandler>
                        <Switch>
                            <Route>
                                <BaseScreen>
                                    <Switch>
                                        <Route path={'/channels'}>
                                            <ChannelList/>
                                        </Route>
                                        <Route>
                                            <Chat/>
                                        </Route>
                                    </Switch>
                                </BaseScreen>
                            </Route>
                        </Switch>
                    </AuthHandler>
                </ConnectedRouter>
            </Provider>
        </div>
    );
}

export default App;
