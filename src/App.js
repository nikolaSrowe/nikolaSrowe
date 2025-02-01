import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import ProjectDetails from './components/portfolio/projectdetails';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';

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
        <Routes>
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
