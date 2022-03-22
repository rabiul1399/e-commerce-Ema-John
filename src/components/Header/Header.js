import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </div>
        </nav>
    );
};

export default Header;