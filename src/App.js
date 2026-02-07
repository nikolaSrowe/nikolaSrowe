import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Home from './components/home/Home'; 
// import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              {/* <Skills /> */}
              <Portfolio />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </main>
    </>
  );
}

export default App;