import React from "react";
import { useNavigate } from "react-router-dom";
import artw1 from "../../assets/artw_1.png"; // Import your images
import artw2 from "../../assets/artw_2.jpg";
import artw3 from "../../assets/artw_3.png";
import "./Art.css"; // Import the CSS file for styling

const Art = () => {
    const navigate = useNavigate();

    return (
        <div className="art-page">
            {/* Back button */}
            <button onClick={() => navigate(-1)} className="back-button">
                Back
            </button>

            {/* Title and description */}
            <h1>My Gallery</h1>
            <p>Much of my love of art is directed at traditional pieces as I love the works of Monet and Hokusai. 
                After taking art history and related courses within my time in Uni I've grown to enjoy all expressions of art.
                Here are some samples of my digital illustrations</p>

            {/* Art gallery */}
            <div className="art-gallery">
                <img src={artw1} alt="Artwork 1" className="art-image" />
                <img src={artw2} alt="Artwork 2" className="art-image" />
                <img src={artw3} alt="Artwork 3" className="art-image" />
            </div>
        </div>
    );
};

export default Art;