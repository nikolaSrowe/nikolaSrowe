import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">[Your Name]</span>
        </h1>
        <p className="hero-description">
          nvnwenofiv nkevnewn awfnpoen <span className="typing">Computer Science Student</span>
        </p>
      </div>
      <div className="hero-animation">
        {/* Add any SVG, animated elements, or images here */}
        <div className="floating-box"></div>
      </div>
    </section>
  );
};

export default Hero;
