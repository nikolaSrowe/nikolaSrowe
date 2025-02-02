import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Sidebar />
      
      <main className='main'>
        <Hero />
        <About />
        <Portfolio />  
        <Blog />
        <Contact />
      </main>
    </Router>
  );
}

export default App;
