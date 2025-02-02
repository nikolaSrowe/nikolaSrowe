import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Import icons for the mobile menu
import "./sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
  const [activeSection, setActiveSection] = useState("home"); // State for active section

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100; // Adjust for better detection
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id") || "";
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-text">Nikola R.</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {["home", "about", "portfolio", "interests", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`nav-link ${
                activeSection === section ? "active" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="icon" /> : <Menu className="icon" />}
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-nav">
            {["home", "about", "portfolio", "interests", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`mobile-nav-link ${
                  activeSection === section ? "active" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;