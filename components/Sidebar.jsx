import React from "react";

function Sidebar() {
    return (
        <div className="sidebar">
        <ul>
            <h3>
                Admin Panel
            </h3>
            <li><a href="#">Home</a>

            </li>
            <li><a href="#" className="AboutPage">About</a>

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