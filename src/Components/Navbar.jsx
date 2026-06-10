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
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>

          <li>
            <a href="#dsa" className="nav-link">
              DSA
            </a>
          </li>

          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
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