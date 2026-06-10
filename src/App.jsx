import './App.css';

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Dsa from "./Pages/Dsa";
import Footer from "./Components/Footer";

import Navbar from "./Components/Navbar";
import Particles from "./components/Particles";

function App() {
  return (
    <div>
      <Particles />
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="dsa">
        <Dsa />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;