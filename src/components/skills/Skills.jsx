import React from "react";
import "./skills.css";
import jsIcon from "../../assets/javascriptlogo.svg";
import reactIcon from "../../assets/react.svg";
import cssIcon from "../../assets/css-3.svg";
import dockIcon from "../../assets/docker.svg";
import figIcon from "../../assets/figma.svg";
import gitIcon from "../../assets/git.svg";
import htmlIcon from "../../assets/html-5.svg";
import javaIcon from "../../assets/javalogo.svg";
import mdbIcon from "../../assets/mongo.svg";
import nodeIcon from "../../assets/nodejs.svg";
import pyIcon from "../../assets/python.svg";


const skills = [
    { name: "Java", icon: javaIcon},
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "CSS", icon: cssIcon },
    { name: "HTML", icon: htmlIcon },
    { name: "Node js", icon: nodeIcon },
    { name: "Python", icon: pyIcon },
    { name: "Docker", icon: dockIcon },
    { name: "MongoDB", icon: mdbIcon },
    { name: "Git", icon: gitIcon },
    { name: "Figma", icon: figIcon },
];

const Skills = () => {
    return (
        <section className="skills">
            <h2 className="section__title">Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
