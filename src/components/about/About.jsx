import React from 'react';
import "./about.css";
import HeaderSocials from '../home/HeaderSocials';

const About = () => {
    return (
        <section className="about container section" id='about'>
            <div className="about__socials spaced-socials">
                <HeaderSocials />
            </div>

            <h2 className="section__title">About Me</h2>

            <div className="about__content">
                {/* Left: Text Content */}
                <div className="about__text">
                    <p className="about__description spaced">
                        I'm a passionate CS student looking to contribute to the tech world by building technology that solves 
                        real problems for real people. I love creating solutions that are both functional and meaningful, 
                        finding an abstract blend of humanity and machine.
                    </p>
                    
                    <p className="about__description spaced">
                        Beyond coding, I love spending my time artistically through drawing, visual design, and reading, finding 
                        inspiration beyond just code. My love for knowledge has drawn me to philosophy, history, and research, 
                        seeking perspectives that push me to think beyond the obvious.
                    </p>
          
                </div>

                <div className="about__card">
                    <h3 className="about__card-title">Quick Facts</h3>
                    <ul className="about__card-list">
                        <li><span className="icon">⌨️</span> Keeb Enthusiast</li>
                        <li><span className="icon">📚</span> Bookworm</li>
                        <li><span className="icon">🎨</span> UI/UX Passionate</li>
                        <li><span className="icon">✔️</span> Never missed a semicolon</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
