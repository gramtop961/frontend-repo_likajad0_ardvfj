import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white antialiased">
      <Hero />
      <About />
      <Projects />
      <Contact />

      <footer className="border-t border-white/10 bg-black py-8 text-white/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8">
          <p className="text-sm">© {new Date().getFullYear()} Your Name — Graphic Designer</p>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
