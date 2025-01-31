import React from 'react';
import "./home.css";
import HeaderSocials from './HeaderSocials';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <p>Hello World</p>
                <HeaderSocials />
            </div>
        </section>
    );
};

export default Home;
