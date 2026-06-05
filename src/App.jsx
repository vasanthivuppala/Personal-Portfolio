import {  Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Dsa from "./pages/Dsa";
import Navbar from "./Components/Navbar";
import Particles from "./components/Particles";
function App() {
  return ( <div>
      <Particles />
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dsa" element={<Dsa />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   </div>
  );
}

export default App;