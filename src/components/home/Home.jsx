import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./home.css";
import HeaderSocials from './HeaderSocials';

const Home = () => {
  return (
    <section className="home" id="home">
      
      {/* Main Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title shadow-text" style={{ color: "var(--primary)" }}>
          [Nikola Rowe]
        </h1>
        <p className="hero-description">
          <span className="typing">Your IT girl</span>
        </p>
      </div>
    </section>
  );
};

export default Home;