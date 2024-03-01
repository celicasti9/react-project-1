import React from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
        <ul>
            <h3>
                Admin Panel
            </h3>
            <li><NavLink 
            to="/dashboard" 
            className={({ isActive }) => isActive ? "selected" : ""}>
            Dashboard
          </NavLink>

            </li>
            <li><a href="#" className="update">Update</a>

            </li>
            <li><a href="#">Settings</a>

            </li>
            <li><a href="#">Logout</a>

            </li>
        </ul>
        </div>
    )
}

export default Sidebar;