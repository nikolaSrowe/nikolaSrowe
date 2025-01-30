import React from 'react';
import "./sidebar.css";

const Sidebar = () => {
    return (
        <aside className='aside'>
            {/* Remove or comment out the logo section */}
            {/*
            <div className="sidebar-logo">
                <a href="#home" className="nav__log">
                    <img src={Logo} alt="Logo" style={{width: '50px', height: '50px', maxHeight: '50px'}} />
                </a>
            </div>
            */}

            <div className="sidebar-content">
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <i className="icon-home"></i>
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <i className="icon-user-following"></i>
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#services" className="nav__link">
                                    <i className="icon-briefcase"></i>
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link">
                                    <i className="icon-layers"></i>
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#blog" className="nav__link">
                                    <i className="icon-note"></i>
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <i className="icon-bubble"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;
