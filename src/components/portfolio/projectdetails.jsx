import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Menu from "./Menu";

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = Menu.find((p) => p.id === parseInt(id));

    if (!project) {
        return <h2 className="error-message">Project Not Found</h2>;
    }

    return (
        <div className="project-details">
            <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            <h2 className="section__title">{project.title}</h2>
            <img src={project.image} alt={project.title} className="project-img" />
            <p className="project-description">{project.description}</p>
            <h3>Technologies Used:</h3>
            <ul>
                {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectDetails;