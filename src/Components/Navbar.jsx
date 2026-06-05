import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="logo">
        ~VV
      </div>

      <nav className="navbar">
        <button
  className="menu-btn"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  ☰
</button>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>

          <li>
            <Link to="/dsa" className="nav-link">
              DSA
            </Link>
          </li>

          <li>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>

          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>

          <li>
           <a
  href="https://drive.google.com/file/d/1l4MFwymVrQYWKAPtUzpnBMCv9foMMvtH/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="resume-btn"
>
  Resume
</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;