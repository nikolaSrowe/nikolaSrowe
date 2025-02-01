import React from "react";
import { useParams } from "react-router-dom";
import Menu from "./Menu"; // Import projects data

const ProjectDetails = () => {
    const { id } = useParams();
    const project = Menu.find((p) => p.link.includes(id));

    if (!project) {
        return <h2>Project Not Found</h2>;
    }

    return (
        <section className="project-details container section">
            <h2 className="section__title">{project.title}</h2>
            <img src={project.image} alt={project.title} className="project-img" />
            <p className="project-description">{project.description}</p>
            <h3>Technologies Used:</h3>
            <ul>
                {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectDetails;
