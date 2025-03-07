import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./bookshelf.css"; 
import "./blog.css"; 
import meditImage from "../../assets/medit.jpg";

const books = [
    {
        id: 1,
        title: "Meditations",
        author: "Marcus Aurelius",
        image: meditImage,
        rating: "⭐⭐⭐⭐⭐",
        review: "A great philosophical guide to Stoicism with great points and much to learn from it. It was an incredibly easy read filled with rules that we may forget to follow sometimes. \"Nowhere you can go is more peaceful--more free of interruptions--than your own soul\"",
    },
];

const Bookshelf = () => {
    const navigate = useNavigate();
    const [selectedBook, setSelectedBook] = useState(null);

    return (
        <div className="bookshelf-page">
            <button onClick={() => navigate(-1)} className="back-button">Back</button>
            <h1>My Bookshelf</h1>
            <p>This is where I share all the books I've ever read and why I read them.</p>

            {/* Book Grid */}
            <div className="bookshelf-grid">
                {books.map((book) => (
                    <div key={book.id} className="book-card" onClick={() => setSelectedBook(book)}>
                        <img src={book.image} alt={book.title} className="book-img" />
                        <p className="book-rating">{book.rating}</p>
                    </div>
                ))}
            </div>

            {/* Pop-up Modal */}
            {selectedBook && (
                <>
                    <div className="modal-overlay" onClick={() => setSelectedBook(null)}></div>
                    <div className="modal">
                        <h2>{selectedBook.title}</h2>
                        <h4 className="modal-author">by {selectedBook.author}</h4>
                        <p>{selectedBook.review}</p>
                        <button className="close-button" onClick={() => setSelectedBook(null)}>
                            Close
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Bookshelf;