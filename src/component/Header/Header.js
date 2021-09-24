import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
           <nav>
               <a href="/shop">Shop</a>
               <a href="/orders">Order Review</a>
               <a href="/inventary">Manage Inventory here</a>
           </nav>
        </div>
    );
};

export default Header;