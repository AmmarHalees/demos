import React from 'react';
import Iframe from 'react-iframe';

const ThankYou = () => {
    return (
        <Iframe url="/ThankYou/index.html"
            id="myId"
            className="iframe"
        />

    );
}

export default ThankYou;
