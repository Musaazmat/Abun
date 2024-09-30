import React from 'react';
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import './Footer.css';


function Footer() {
    return (
    <footer>
        <div className='sidebar-footer'>
        <NavLink to="/profile"  className={({ isActive }) => (isActive ? 'active' : '')}>
        <CgProfile className="sidebar-icon" />
        Profile
        </NavLink>
        </div>
    </footer>
    )
}

export default Footer