import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Home from './components/home/Home';
import Bookshelf from './components/blog/Bookshelf';
import Art from './components/blog/Art';
import Lego from './components/blog/Collections';
import ProjectPage from './components/portfolio/ProjectPage'; 

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Routes>
          {/* Main Page - Includes All Sections */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Portfolio />
              <Blog />
              <Contact />
            </>
          } />

          {/* Blog/Interests Routes */}
          <Route path="/bookshelf" element={<Bookshelf />} />
          <Route path="/art" element={<Art />} />
          <Route path="/lego" element={<Lego />} />

          {/* Dynamic Project Route */}
          <Route path="/projects/:id" element={<ProjectPage />} /> 
        </Routes>
      </main>
    </>
  );
}

export default App;
