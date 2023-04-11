import React from 'react';
import './Header.css'

import { NavLink } from 'react-router-dom';

const Header = ({ user }) => {
    return (
        <header>
            <h1>Book-Saver</h1>
            <div className="login-section">
                {user.uid ? <h2 className='users-name'>Hello, {user.displayName}!</h2> : 
                <NavLink to='/login' className='login-button'>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;