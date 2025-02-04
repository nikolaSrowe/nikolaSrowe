import React from 'react';
import { Link } from "react-router-dom"; // Import Link
import "./blog.css";
import Image1 from "../../assets/bookshelf.svg";
import Image2 from "../../assets/artpal.svg";
import Image3 from "../../assets/neko.svg";

const Blog = () => {
    return (
        <section className="blog container section" id="interests">
            <h2 className="section__title">Interests</h2>

            <div className="blog__container grid">
                <Link to="/bookshelf" className="blog__card"> {/* Make entire card a link */}
                    <div className="blog__thumb">
                        <img src={Image1} alt="" className="blog__img" />
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">My Bookshelf</h3>
                        <div className="blog__meta">
                            <span>Reviews and Likes</span>
                        </div>
                    </div>
                </Link>

                <Link to="/art" className="blog__card">
                    <div className="blog__thumb">
                        <img src={Image2} alt="" className="blog__img" />
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Traditional to Digital</h3>
                        <div className="blog__meta">
                            <span>Pencil and paper to pencil and iPad Check out my artwork :D</span>
                        </div>
                    </div>
                </Link>

                <Link to="/lego" className="blog__card">
                    <div className="blog__thumb">
                        <img src={Image3} alt="" className="blog__img" />
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Collection</h3>
                        <div className="blog__meta">
                            <span>Love love love building Legos (and more)</span>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default Blog;
