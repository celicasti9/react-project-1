import React from "react";
import { Link } from "react-router-dom";



function Sidebar() {
    return (
        <div className="sidebar">
        <ul className="sidebar-Links">

            <h3> 
                <br></br>
                Admin Panel
            </h3>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="dashboard"> Dashboard </Link></li>
            <li><Link to="/add-product"> Add products </Link> </li>
        </ul>
        </div>
    );
}

export default Sidebar;