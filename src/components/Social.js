import React, { lazy } from 'react';
const SocialIcons = lazy(() => import("../UI/SocialIcons"));

const Social = ({ mq, clickSpinner }) => {
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