import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/keyboard.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
    {
        id: 1,
        image: Image1,
        title: "Tech Stack",
        description:
        " Familiar with Java, Python, HTML, CSS, JavaScript, R. Currently learning React.js, Three.js, and Vite",
    },
    {
        id: 2,
        image:Image2,
        title: "Keebs & Switches",
        description: 
        "Current Model: YUNZII YZ75 with Akko Cream Blue Pro switches - currently aiming for osume matcha keycaps",
    },
    {
        id: 3,
        image: Image3,
        title: "Artistic Muse",
        description:
        "I paint like Monet so I make Monet",
    }
]
const Services = () => {
    return (
    <section className="services container section" id="services">
        <h2 className="section__title">Tech & Hobbies</h2>

        <div className="services__container grid">
           {data.map(({id, image, title, description}) => {
            return(
                <div className="services__card"key={id}>
                    <img src={image} alt="" className="services__img" />

                    <h3 className="services__title">{title}</h3>
                    <p className="services__description">{description}</p>
                </div>
            )
           })} 
        </div>
    </section>
    );
};

export default Services