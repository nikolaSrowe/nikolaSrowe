import React from 'react';
import "./about.css";
import montrealPic from '../../assets/montrealPic.JPG';
import dinoIcon from '../../assets/dino.png';
import HeaderSocials from '../home/HeaderSocials';

const About = () => {
    return (
        <section className="about container section" id="about">
            <div className="about__content">
                {/* Left: Text Content */}
                <div className="about__text">
                    {/* <h2 className="section__title">About</h2> */}
                    <p className="about__greeting">Hi there!</p>
                    <h2 className="about__name">I'm Nikola</h2>
                    
                    <p className="about__description spaced">
                        I'm a passionate CS graduate looking to contribute to the tech world. I love creating solutions that are both functional and meaningful, 
                        finding an abstract blend of humanity and machine. 
                    </p>
                    
                    <p className="about__description spaced">
                        Beyond coding, you'll find me spending my time with my nose in a book, crafting on MC, or relaxing 
                        in the Howling Abyss. My love for knowledge has drawn me to philosophy, history, and research, that help
                        seek perspectives that push me to think beyond the obvious. 
                    </p>

                    <p className="about__description spaced">
                        That being said, my Git commits can tell you more about me than I can.
                    </p>

                    {/* Social Links */}
                    <div className="about__socials">
                        <HeaderSocials />
                    </div>
                </div>

                {/* Right: Profile Picture */}
                <div className="about__image">
                    <img src={montrealPic} alt="Nikola in Montreal" className="about__img" />
                </div>
            </div>

            {/* Facts Section - Below text and image */}
            <div className="about__facts">
                <div className="facts__column">
                    <div className="fact__item">
                        <img src={dinoIcon} alt="icon" className="fact__icon" />
                        <span>Media & Graphic Designer for UBCO SEAC</span>
                    </div>
                    <div className="fact__item">
                        <img src={dinoIcon} alt="icon" className="fact__icon" />
                        <span>Bookworm (Please leave Recs!)</span>
                    </div>
                    <div className="fact__item">
                        <img src={dinoIcon} alt="icon" className="fact__icon" />
                        <span>University of British Columbia, B.Sc. Science</span>
                    </div>
                </div>

                <div className="facts__column">
                    <div className="fact__item">
                        <img src={dinoIcon} alt="icon" className="fact__icon" />
                        <span>Healthcare, Software, Network Passionate</span>
                    </div>
                    <div className="fact__item">
                        <img src={dinoIcon} alt="icon" className="fact__icon" />
                        <span>Keyboard Enthusiast (Thocky is best)</span>
                    </div>
                    <div className="fact__item">
                        <img src={dinoIcon} alt="icon" className="fact__icon" />
                        <span>Spicy food fan with no tolerance</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;