import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const navigate = useNavigate();

    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => curElem.category === categoryItem);
        setItems(updatedItems);
    };

    return (
        <section className="work container section" id="portfolio">
            <h2 className="section__title">Recent Works</h2>

            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
                <span className="work__item" onClick={() => filterItem("Art")}>Art</span>
                <span className="work__item" onClick={() => filterItem("Coding")}>Coding</span>
            </div>

            <div className="work__container grid">
                {items.map(({ id, image, title, category, link }) => (
                    <div className="work__card" key={id} onClick={() => navigate(link)}>
                        <div className="work__thumbnail">
                            <img src={image} alt={title} className="work__img" />
                            <div className="work__mask"></div>
                        </div>
                        <span className="work__category">{category}</span>
                        <h3 className="work__title">{title}</h3>
                        <button className="work__button">View Project</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
