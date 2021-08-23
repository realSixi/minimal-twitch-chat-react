import React from 'react';

import Chat from './screens/Chat/Chat';
import { Provider } from 'react-redux';
import store, { history, persistor } from './redux/store';

import { ConnectedRouter } from 'connected-react-router';
import AuthHandler from './screens/Auth/AuthHandler';
import BaseScreen from './screens/BaseScreen/BaseScreen';
import { Route, Switch } from 'react-router-dom';
import ChannelList from './screens/ChannelList/ChannelList';
import { PersistGate } from 'redux-persist/integration/react';


function App() {
    return (
        <div className='App dark:bg-black'>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ConnectedRouter history={history}>
                        <AuthHandler>
                            <Switch>
                                <Route>
                                    <BaseScreen>
                                        <Switch>
                                            <Route path={'/channels'}>
                                                <ChannelList />
                                            </Route>
                                            <Route>
                                                <Chat />
                                            </Route>
                                        </Switch>
                                    </BaseScreen>
                                </Route>
                            </Switch>
                        </AuthHandler>
                    </ConnectedRouter>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
