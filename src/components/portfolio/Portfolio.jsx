import React, { useState } from "react";
import Menu from "./Menu";
import "./portfolio.css";

const Portfolio = () => {
    const [items, setItems] = useState(Menu);

    // Filter function
    const filterItem = (categoryItem) => {
        if (categoryItem === "Everything") {
            setItems(Menu);
        } else {
            const updatedItems = Menu.filter((curElem) => curElem.category === categoryItem);
            setItems(updatedItems);
        }
    };

    return (
        <section className="work container section" id="portfolio">
            <h2 className="section__title">Portfolio Projects</h2>

            {/* Filter Buttons */}
            <div className="work__filters">
                <span className="work__item" onClick={() => filterItem("Everything")}>Everything</span>
                <span className="work__item" onClick={() => filterItem("Design")}>Interests</span>
                <span className="work__item" onClick={() => filterItem("Coding")}>Coding</span>
            </div>

            {/* Project List */}
            <div className="work__container">
                {items.map(({ id, image, title, category, description, technologies, link }) => (
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-card" 
                        key={id}
                    >
                        {/* Left: Image */}
                        <div className="project-image">
                            <img src={image} alt={title} />
                        </div>
                        
                        {/* Right: Content */}
                        <div className="project-content">
                            <h3 className="project-title">{title}</h3>
                            <p className="project-desc">{description}</p>
                            <span className="project-category">{category}</span>
                            <div className="project-tech">
                                {technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;