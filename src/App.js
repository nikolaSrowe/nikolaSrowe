import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';




function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Hero />
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </>
  );
} 

export default App