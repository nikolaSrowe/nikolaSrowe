import React from 'react';
import "./home.css";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import FishAnimation from "../fish/fishAnimation"; // Correct import with proper casing

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">

                {/* <FishAnimation /> Correct usage of FishAnimation */}

                {/* <h1 className="home__name">Salbiah Rowe</h1> */}
                <span className="home__education">Hello World,</span>

                <HeaderSocials />

                <a href="#contact" className="btn">Press My Button</a>

                <ScrollDown />
            </div>
        </section>
    );
};

export default Home;
