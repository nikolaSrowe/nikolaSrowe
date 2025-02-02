import React from 'react';
import "./contact.css";
import tubingPic from '../../assets/tubingPic.jpg'; 
import gardenPic from '../../assets/gardenPic.jpg';
import boatPic from '../../assets/boatPic.jpg';
import cafePic from '../../assets/cafePic.jpg';

const Contact = () => {
    return (
        <section className="contact container section" id='contact'>
            {/* Title and description */}
            <div className="contact__content">
                <h2 className="section__title">Let's Connect!</h2>
                <p className="contact__details">
                    Whether you want to chat about projects, collaboration, or just say hi, I'd love to hear from you!
                </p>
            </div>

            {/* Contact information */}
            <div className="contact__info">
                <p className="contact__label">Email:</p>
                <a href="mailto:your.email@example.com" className="contact__link">
                    nsrowe14@yahoo.ca
                </a>
            </div>

            {/* Social links */}
            <div className="contact__socials">
                <p className="contact__label">Find me on:</p>
                <div className="social__links">
                    <a href="https://www.instagram.com/nikolarowe/?igsh=amx2dnVucDM3NGk3&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social__link">
                        Instagram
                    </a>
                    <a href="https://www.linkedin.com/in/nikola-rowe-709515329/" target="_blank" rel="noopener noreferrer" className="social__link">
                        LinkedIn
                    </a>
                    <a href="https://github.com/nikolaSrowe" target="_blank" rel="noopener noreferrer" className="social__link">
                        GitHub
                    </a>
                </div>
            </div>

            {/* Image Slider */}
            <div className="image-slider">
                <img src={tubingPic} alt="Tubing" />
                <img src={gardenPic} alt="Garden" />
                <img src={boatPic} alt="Boat" />
                <img src={cafePic} alt="Cafe" />
            </div>
        </section>
    );
};

export default Contact;