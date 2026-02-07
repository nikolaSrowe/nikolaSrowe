import React from 'react';
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__text">
                    © {currentYear} Nikola Rowe. All rights reserved.
                </p>
                <p className="footer__credit">
                    Made with <span className="heart">♥</span> by Nikola Rowe
                </p>
            </div>
        </footer>
    );
};

export default Footer;