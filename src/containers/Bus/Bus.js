import React from 'react';

import Iframe from 'react-iframe';

const Bus = () => {
    return (

        <div className='project_item_container'>

            <Iframe url="/DigitalBusinessCard/index.html"
                id="myId"
                className="iframe"
            />

            
<a class="_button_basic _primary_button" href="https://www.etsy.com/listing/804777610/limited-digital-business-card-template"
                role="button">

                Buy it Here
            </a>


        </div>

    );
}

export default Bus;

