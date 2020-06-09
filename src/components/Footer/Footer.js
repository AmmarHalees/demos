import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <footer className='footer'>

            <div>

                Copyright © 2020 PinkRevolt™, LLC. All Rights Reserved. <Link to='/projects'>Projects</Link> | <Link to='/projects'>Privacy Policy</Link> | <Link to='/projects'>About</Link>

            </div>

        </footer>
    );
}

export default Footer;