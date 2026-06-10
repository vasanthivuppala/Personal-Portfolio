import './App.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Dsa from "./pages/Dsa";
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