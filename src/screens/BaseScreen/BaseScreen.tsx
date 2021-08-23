import React, {ReactNode} from 'react';
import './BaseScreen.less';
import MainMenu from "./MainMenu/MainMenu";

const BaseScreen = ({children}: { children: ReactNode }) => {


    return (
        <div className='base-screen'>
            <MainMenu/>
            <div className={'content pt-12'}>
                {children}
            </div>
        </div>
    );
};

export default BaseScreen;
