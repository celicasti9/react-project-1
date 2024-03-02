import React from "react";
import { Link } from "react-router-dom";



function Sidebar() {
    return (
        <div className="sidebar">
        <ul className="sidebar-Links">

            <h3>
                Admin Panel
            </h3>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="dashboard"> Dashboard </Link></li>

            
            <li><a href="#">Settings</a>

            </li>
            <li><a href="#">Logout</a>

            </li>
        </ul>
        </div>
    );
}

export default Sidebar;