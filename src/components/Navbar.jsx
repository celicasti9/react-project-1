import Button from "./Button";
//import "../styles/navbar.css"
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <img src="https://shorturl.at/mPQ59" alt="Logo" width="50" height="50" />
        <div className="navbar-title">
          <h1>Student Commerce Online</h1>
        </div>

        <ul className="navbar-links">
        <li><Link to="/about"> About </Link></li>
        </ul>
        <Button label="Sign In" />
      </div>
    </div>
  );
}
export default Navbar;