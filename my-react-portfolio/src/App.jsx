// App.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="logo">Maham Afreen</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="about" data-aos="fade-up"><About /></section>
      <section id="services" data-aos="fade-up"><Services /></section>
      <section id="skills" data-aos="fade-up"><Skills /></section>
      <section id="education" data-aos="fade-up"><Education /></section>
      <section id="projects" data-aos="fade-up"><Projects /></section>
      <section id="contact" data-aos="fade-up"><Contact /></section>
    </div>
  );
}
