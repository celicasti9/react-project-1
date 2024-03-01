import Button from "./Button";
//import "../styles/navbar.css"
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <img src="./images/studentLogo.jpg" alt="Logo" width="50" height="50" />
        <div className="navbar-title">
          <h1>Student Commerce Online</h1>
        </div>
        <ul className="navbar-links">
        
        <li><NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
           Home
        </NavLink></li>

          <li><a href="#">Products</a></li>
          
            <li><NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "selected" : ""}>
            About
          </NavLink></li>
        </ul>
        <Button />
      </div>
    </div>
  );
}
export default Navbar;