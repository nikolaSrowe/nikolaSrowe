import React from "react";
import { useNavigate } from "react-router-dom";
import "./collections.css"; // Import styles

const Collection = () => {
    const navigate = useNavigate();

    return (
        <div className="collection-page">
            {/* Back button */}
            <button onClick={() => navigate(-1)} className="back-button">
                Back
            </button>

            {/* Title and description */}
            <h1>My Collection</h1>
            <p>
                This is where I showcase my LEGO builds, Pokémon cards, and other collectibles.
            </p>

            {/* Collection content will go here */}
        </div>
    );
};

export default Collection;
