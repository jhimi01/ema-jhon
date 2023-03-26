import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <h2>Ema-Jhon</h2>
            <div>
                <a href="shop">shop</a>
                <a href="home">home</a>
                <a href="tutorial">tutorial</a>
                <a href="login">login</a>
            </div>
        </nav>
    );
};

export default Header;