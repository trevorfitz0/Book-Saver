import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import './Header.css'

const Header = ({ logOutUser, user }) => {

    const logout = async () => {
        await signOut(auth)
        logOutUser()
    }

    return (
        <header>
            <NavLink to='/' className='page-title'>Book Saver</NavLink>
            <div className="login-section">
                {user.uid ? 
                <section className='user-logged-in'>
                    <h2 className='users-name'>Hello, {user.displayName}!</h2> 
                    <button className='logout-button' onClick={() => logout()}>Log Out</button>
                </section>
                : 
                <NavLink to='/login' className='login-button'>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;