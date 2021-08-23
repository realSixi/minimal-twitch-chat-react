import { ReactNode } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

// @ts-ignore
import { AuthorizationCodeCallback, RequestAuthorizationCode } from 'react-oauth2-auth-code-flow';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import qs from 'query-string';
import { authActions } from '../../redux/auth';


const LoginCallback = () => {
    const location = useLocation();

    console.log('loc', location.hash);
    const hashParams = qs.parse(location.hash);

    console.log('SearchParams', hashParams);

    const dispatch = useDispatch();

    dispatch(authActions.processToken( (hashParams.access_token || hashParams.id_token) as string ));

    dispatch(push('/'));

    return null;
};

const AuthHandler = ({ children }: { children: ReactNode }) => {

    const dispatch = useDispatch();

    const domain = 'id.twitch.tv/oauth2'; //process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = '1lk526oh4rsbzwcqowmcuc4m9agza3'; //process.env.REACT_APP_AUTH0_CLIENT_ID;

    const history = useHistory();


    const onRedirectCallback = (appState: any) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Switch>
            <Route path={'/login/callback'}>
                <LoginCallback />
            </Route>
            {children}
        </Switch>
    );
};

export default AuthHandler;
