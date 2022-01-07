import React from 'react';
import styled from 'styled-components';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './Navbar.css';


function Navbar() {
    return (

    <div className='navbar-container' >
        <div className='navbar-wrapper'>
            <div className='navbar-left'>
                <div className='navbar-language'>ES</div>
            </div>
            <div className='navbar-center'>
                <div className='navbar-logo'>MÜNCH</div>
            </div>
            <div className='navbar-right'>
                <div className='navbar-menu-item'>REGISTER</div>
                <div className='navbar-menu-item'>SIGN IN</div>
                <div className='navbar-menu-item'>
                    <AiOutlineShoppingCart />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Navbar;
