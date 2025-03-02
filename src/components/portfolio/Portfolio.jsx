import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import DeviceMockup from "./DeviceMockup";
import "./portfolio.css";

const Portfolio = () => {
    const navigate = useNavigate();
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
                <span className="work__item" onClick={() => filterItem("Design")}>Design</span>
                <span className="work__item" onClick={() => filterItem("Coding")}>Coding</span>
            </div>

            {/* Project Grid - now a column layout */}
            <div className="work__container">
                {items.map(({ id, image, title, category, description, technologies, deviceType, bgColor }) => (
                    <div className="project-card" key={id} onClick={() => navigate(`/projects/${id}`)}>
                        <div className="project-mockup">
                            <DeviceMockup 
                                deviceType={deviceType || "laptop"} 
                                image={image} 
                                bgColor={bgColor}
                                title={title}
                            />
                        </div>
                        <div className="project-info">
                            <h3 className="project-title">{title}</h3>
                            <p className="project-category">{category}</p>
                            <p className="project-desc">{description}</p>
                            <div className="project-tech">
                                {technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;