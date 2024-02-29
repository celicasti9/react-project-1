import Button from "./Button";
//import "../styles/navbar.css"

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <img src="./images/studentLogo.jpg" alt="Logo" width="50" height="50" />
        <div className="navbar-title">
          <h1>Student Commerce Online</h1>
        </div>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
        <Button label="Sign In" />
      </div>
    </div>
  );
}
export default Navbar;