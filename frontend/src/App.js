import React from "react";
import { Element } from "react-scroll"; // For creating scrollable sections
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import About from "./components/About";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      {/* Navbar Section */}
      <Navbar />

      {/* Sections */}
      <Element name="home">
        <MainSection />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="projects">
        <ProjectList />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
