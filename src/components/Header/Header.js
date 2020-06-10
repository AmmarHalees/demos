import React from 'react';
import { header_links } from '../../utils/headerlinks';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header className='header'>
            <nav className='headerNav'>

                <Link to='/home' className='logoLinkContainer'>
                                <img src={logo} className='logo' alt ='site logo'/>

                </Link>
           
                <ul style={{display:'grid',gridTemplateColumns: `repeat(${header_links.length} , 1fr)`}}>
                    {header_links.map(({ title, id, to }) => {

                        return (
                            <li key={id} >

                                <Link className='headerLink' to={to}>{title}</Link>

                            </li>
                        )

                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Header;