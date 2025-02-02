import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectPage.css"; // Import the CSS file

const ProjectPage = () => {
    const navigate = useNavigate();

    return (
        <div className="project-page">
            <button onClick={() => navigate(-1)} className="back-button">
                Back
            </button>
            <h1>Sorry, this project hasn't been uploaded properly yet.</h1>
        </div>
    );
};

export default ProjectPage;