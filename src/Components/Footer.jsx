import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-left">
        <span className="footer-logo">VV</span>

        <span className="footer-dot">•</span>

        <span>© 2026 Vasanthi Vuppala</span>
      </div>

      <div className="footer-center">

  <a href="#home">Home</a>

  <a href="#about">About</a>

  <a href="#dsa">DSA</a>

  <a href="#projects">Projects</a>

  <a href="#contact">Contact</a>

</div>

      <div className="footer-right">

        <a
          href="https://github.com/vasanthivuppala"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.chttps://www.linkedin.com/in/vasanthi-vuppala-217165348/om/in/yourlinkedin"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:vasanthivuppala890@gmail.com">
          <MdEmail />
        </a>

      </div>

    </footer>
  );
}

export default Footer;