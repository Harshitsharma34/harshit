import image from  "../Assets/Logo.svg"
import "../Css/Nav.css"

function Nav() {
    return (
      <div className="nav">
              <div className="navbar-container">
              <img className="logo" src = {image} alt="My Happy SVG" />
              <a  href="http://localhost:3000/">Back to 🏠 </a>
              </div>
      </div>
    );
  }
  
  export default Nav;
  