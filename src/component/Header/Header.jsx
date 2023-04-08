import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header'>
            <h2>Ema-Jhon</h2>
            <div>
                <Link to="/">shop</Link>
                <Link to="orders">order review</Link>
                <Link to="inventory">inventory</Link>
                <Link to="login">login</Link>
            </div>
        </nav>
    );
};

export default Header;