import React from "react";
import { BsWrenchAdjustableCircle } from "react-icons/bs";
import { CiDollar, CiPlug1, CiVideoOn } from "react-icons/ci";
import { FaLeaf, FaRegStar, FaStumbleuponCircle } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { LuFileKey } from "react-icons/lu";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { RiArticleLine, RiMessage2Line } from "react-icons/ri";
import { SiBlogger } from "react-icons/si";
import { NavLink } from 'react-router-dom';


import "./Sidebar.css";

const Sidebar = () => {
    return (
        <>
        <aside className="sidebar">
            {/* Sidebar Heading */}
            <div className="sidebar-header">
                <h2>abun</h2>
            </div>

            {/* Sidebar Navigation */}
            <nav>
                <ul>
                    <li>
                        <NavLink to="/"  className={({ isActive }) => (isActive ? 'active' : '')} end>
                        <FaLeaf className="sidebar-icon" />
                        Create Article
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/upgrade/Keywords Articles"  className={({ isActive }) => (isActive ? 'active' : '')} end>
                        <LuFileKey className="sidebar-icon" />
                        Keywords to Articles
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/generated-articles"  className={({ isActive }) => (isActive ? 'active' : '')} end>
                        <RiArticleLine className="sidebar-icon" />
                        Generated Articles
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/upgrade/Auto Blog"  className={({ isActive }) => (isActive ? 'active' : '')} end>
                        <SiBlogger className="sidebar-icon" />
                        Auto Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/upgrade/Fast Google Index"  className={({ isActive }) => (isActive ? 'active' : '')} end>
                        <FaStumbleuponCircle className="sidebar-icon" />
                        Fast Google Index
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/upgrade/Integration"  className={({ isActive }) => (isActive ? 'active' : '')} end>
                        <CiPlug1 className="sidebar-icon" />
                        Integration
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/subscription"  className={({ isActive }) => (isActive ? 'active' : '')} end>
                        <FaRegStar className="sidebar-icon" />
                        Subscription
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/upgrade/Article Setting' className={({ isActive }) => (isActive ? 'active' : '')} end>
                        <BsWrenchAdjustableCircle className="sidebar-icon" />
                        Article Setting
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='back-link' className={({ isActive }) => (isActive ? 'active' : '')} end>
                        <FaLink className="sidebar-icon" />
                        Free Backlinks
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/upgrade/Affiliate Program' className={({ isActive }) => (isActive ? 'active' : '')} end>
                        <CiDollar className="sidebar-icon" />
                        Affiliate Program
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/upgrade/Feature Request' className={({ isActive }) => (isActive ? 'active' : '')} end>
                        <RiMessage2Line className="sidebar-icon" />
                        Feature Request
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='tutorial' className={({ isActive }) => (isActive ? 'active' : '')} end>
                        <MdOutlineOndemandVideo className="sidebar-icon" />
                        Tutorials
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='get-demo' className={({ isActive }) => (isActive ? 'active' : '')} end>
                        <CiVideoOn className="sidebar-icon" />
                        Get Demo 
                        

                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
        </>
    );
};

export default Sidebar;
