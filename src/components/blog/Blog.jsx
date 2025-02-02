import React from 'react';
import { Link } from "react-router-dom"; // Import Link
import "./blog.css";
import Image1 from "../../assets/bookshelf.svg";
import Image2 from "../../assets/artpal.svg";
import Image3 from "../../assets/neko.svg";

const Blog = () => {
    return (
        <section className="blog container section" id="interests">
            <h2 className="section__title">Hobbies</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <Link to="/bookshelf"> {/* Use Link instead of <a> */}
                            <img src={Image1} alt="" className="blog__img" />
                        </Link>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">My Bookshelf</h3>
                        <div className="blog__meta">
                            <span>Reviews and Likes</span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <Link to="/art"> {/* Use Link instead of <a> */}
                            <img src={Image2} alt="" className="blog__img" />
                        </Link>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Traditional to Digital</h3>
                        <div className="blog__meta">
                            <span>From pencil and paper to pencil and iPad</span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <Link to="/lego"> {/* Use Link instead of <a> */}
                            <img src={Image3} alt="" className="blog__img" />
                        </Link>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Lego & Pokemon Card Collection</h3>
                        <div className="blog__meta">
                            <span>love love love building legos, puzzles and collecting</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;