import {useState,useEffect} from "react";
import "../Pagescss/Home.css";
import image from "../pictures/image.png";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Home() {
  const names = [
  "Vasanthi Vuppala",
  "వాసంతి ఉప్పల",
  "वासंथि वुप्पला",
  "Vasanthi Vuppala",
  "Vasanthi Vuppala",
  "ヴァサンティ・ヴッパラ",
  "바산티 부팔라",
  "Васанти Вуппала",
  "Vasanthi Vuppala"
];
const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % names.length);
  }, 1500);

  return () => clearInterval(interval);
}, []);
  return (
    <section className="hero">

      <div className="hero-left">

        <h1 className="hero-name">
          {names[index]}
        </h1>

        <h2 className="hero-role">
          MERN Stack Developer
        </h2>
  

        <p className="hero-description">
          Passionate about building modern web applications,
          solving DSA problems, and contributing to open source.
        </p>

       <div className="social-links">

  <a
    href="https://github.com/vasanthivuppala"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/vasanthi-vuppala-217165348/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <FaLinkedin />
  </a>

</div>

      </div>
      <div className="hero-right">
     <div className="profile-circle">
     <img
      src={image}
      alt="Profile"
      className="profile-pic"
    />
  </div>
</div>
      

    </section>
  );
}

export default Home;