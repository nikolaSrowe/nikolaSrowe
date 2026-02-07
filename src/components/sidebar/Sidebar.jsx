import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll to detect active section (only on homepage)
  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const sections = document.querySelectorAll("section[id]");
        const scrollPosition = window.scrollY + 150;
        
        let currentSection = "home";
        
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute("id");
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = sectionId;
          }
        });
        
        setActiveSection(currentSection);
      };
      
      // Initial check
      handleScroll();
      
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // Reset to home when on other pages
      setActiveSection("home");
    }
  }, [location.pathname]);

  // Smooth scroll to section
  const handleNavClick = (sectionId) => {
    // If we're not on homepage, navigate there first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveSection(sectionId);
        }
      }, 100);
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }
    }
  };

  return (
    <nav className="navbar-island">
      <div className="navbar-brand">
        <span className="logo-text">Nikola R.</span>
      </div>

      <div className="navbar-links">
        <button
          onClick={() => handleNavClick("home")}
          className={`nav-link ${activeSection === "home" ? "active" : ""}`}
        >
          Home
        </button>
        <button
          onClick={() => handleNavClick("about")}
          className={`nav-link ${activeSection === "about" ? "active" : ""}`}
        >
          About
        </button>
        <button
          onClick={() => handleNavClick("portfolio")}
          className={`nav-link ${activeSection === "portfolio" ? "active" : ""}`}
        >
          Portfolio
        </button>

        <button
          onClick={() => handleNavClick("contact")}
          className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;