import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory Here</a>
            </nav>
            <div className="search-container">
                <input type="text" class="search-input" placeholder="type here to search"></input>
            </div>
        </div>
    );
};

export default Header;