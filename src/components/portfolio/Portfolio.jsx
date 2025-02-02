import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import "./portfolio.css";

const Portfolio = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState(Menu); // State for filtering projects

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
                <span className="work__item" onClick={() => filterItem("Art")}>Design</span>
                <span className="work__item" onClick={() => filterItem("Coding")}>Coding</span>
            </div>

            {/* Project Grid */}
            <div className="work__container grid">
                {items.map(({ id, image, title, category }) => (
                    <div className="work__card" key={id} onClick={() => navigate(`/projects/${id}`)}>
                        <div className="work__thumbnail">
                            <img src={image} alt={title} className="work__img" />
                            <div className="work__mask"></div>
                        </div>
                        <span className="work__category">{category}</span>
                        <h3 className="work__title">{title}</h3>
                        <button className="work__button">View</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
