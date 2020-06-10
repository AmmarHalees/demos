import React from 'react';
import Iframe from 'react-iframe';

const ThankYou = () => {
    return (
        <div className='project_item_container'>


            <a class="_button_basic _primary_button" href="https://www.etsy.com/listing/804253086/limited-zebra-stripes-interactive"
                role="button">

                    Buy it Here
            </a>

            <Iframe url="/ThankYou/index.html"
                id="myId"
                className="iframe"
            />

        </div>

    );
}

export default ThankYou;
