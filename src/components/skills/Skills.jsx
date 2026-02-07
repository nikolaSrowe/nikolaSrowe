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
import tsIcon from "../../assets/typescript.svg";
import mysqlIcon from "../../assets/mysql.svg";
import phpIcon from "../../assets/php.svg";

const skills = [
    { name: "CSS", icon: cssIcon },
    { name: "Docker", icon: dockIcon },
    { name: "Figma", icon: figIcon },
    { name: "Git", icon: gitIcon },
    { name: "HTML", icon: htmlIcon },
    { name: "Java", icon: javaIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "MongoDB", icon: mdbIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "PHP", icon: phpIcon },
    { name: "Python", icon: pyIcon },
    { name: "React", icon: reactIcon },
    { name: "TypeScript", icon: tsIcon },
];

const Skills = () => {
    return (
        <section className="skills section" id="skills">
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