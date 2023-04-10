import React from 'react';
import './Header.css'

import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Book-Saver</h1>
            <div className="login-section">
                <NavLink to='/login' className='login-button'>Login</NavLink>
                {/* <h2>User-Info</h2> */}
            </div>
        </header>
    )
}

export default Header;