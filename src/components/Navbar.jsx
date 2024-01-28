import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './Navbar.css'

const Nav = () => {
    return (
        <div className='nav-container'>
            <div id='home-page'>
                <Link to='/signin'>SignIn</Link>
            </div>
            <div id='post-page'>
                <Link to='/signup'>SignUp</Link>
            </div>
        </div>
    )
}

export default Nav;