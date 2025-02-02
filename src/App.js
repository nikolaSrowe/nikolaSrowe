import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Hero from './components/hero/Hero';
import Bookshelf from './components/blog/Bookshelf'; // Import the new pages
import Art from './components/blog/Art';
import Lego from './components/blog/Collections';

function App() {
  return (
    <Router>
      <Sidebar />
      <main className='main'>
        <Routes>
          {/* Main page with all sections */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Portfolio />
              <Blog />
              <Contact />
            </>
          } />
          {/* Separate routes for blog pages */}
          <Route path="/bookshelf" element={<Bookshelf />} />
          <Route path="/art" element={<Art />} />
          <Route path="/lego" element={<Lego />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;