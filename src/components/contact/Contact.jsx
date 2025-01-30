import React from 'react';
import "./contact.css";

const Contact = () => {
    return(
        <section className="contact container section"id='contact'>
            <h2 className="section__title">Get in Touch with me(or touch me)</h2>

            <div className="contact__container grid">
               <div className="contact__info">
                    <h3 className="contact__title">Reach out about hentai and stoicism</h3>
                    <p className="contact__details">Dont like formality? Slide into my DM's</p>
                </div> 

                <form action="" className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input" placeholder='Insert your name'/>
                        </div>

                        <div className="contact__form-div">
                            <input type="instagram" className="contact__form-input" placeholder='Insert your username'/>
                        </div>
                    </div> 
                    <div className="contact__form-div">
                            <input type="text" className="contact__form-input" placeholder='Insert your subject'/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <textarea name="" id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your message'></textarea>
                        </div>

                        <button className="btn">Send Messgae</button>  
                </form>
            </div>
        </section>
    )
}

export default Contact