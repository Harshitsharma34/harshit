import image from  "../Assets/Logo.svg"
import "../Css/Nav.css"

function Nav() {
    return (
      <div className="nav">
              <div className="navbar-container">
              <img className="logo" src = {image} alt="My Happy SVG" />
                   <ul className="nav-list">
                        <li><a className="dumpyard" style={{textDecoration: "none",color:"white"}}  href="#">Dumpyard</a></li>
                        <li><a className="work" style={{textDecoration: "none",color:"white"}} href="#">Work</a></li>
                        <li><a className="about" style={{textDecoration: "none",color:"white"}} href="#">About</a></li>
                        <li><a className="connect" style={{textDecoration: "none",color:"white"}} href="#">Let's Connect</a></li>
                </ul>
              </div>
      </div>
    );
  }
  
  export default Nav;
  