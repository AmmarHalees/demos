import React from 'react';
import { header_links } from '../../utils/headerlinks';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <nav className='headerNav'>
                <ul>
                    {header_links.map(({ title, id, to }) => {

                        return (
                            <li key={id}>

                                <Link to={to}>{title}</Link>

                            </li>
                        )

                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Header;