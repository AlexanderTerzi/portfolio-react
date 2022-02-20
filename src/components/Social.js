import React, { lazy, useContext } from 'react';
import { AppContext } from '../App';

const SocialIcons = lazy(() => import("../UI/SocialIcons"));

const Social = () => {

    const { mq, clickSpinner } = useContext(AppContext);

    return (
        <>
            {mq ? (
                <SocialIcons theme="light" />
            ) : (
                <SocialIcons theme={clickSpinner ? "dark" : "light"} />
            )}
        </>
    );
};

export default Social;