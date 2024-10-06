import React from 'react';
import '../styles/ContactUs.css'; // Ensure you include the .css extension

const ContactUsPage = () => { 
    return (
        <div>
            <header className="header">
                <h1>Contact Us</h1>
            </header>
            <main className="contact-content">
                <section className="contact-section">
                    <h2>Get In Touch</h2>
                    <p>
                        If you have any questions, suggestions, or need support, please feel free to contact us using the form below or via email.
                    </p>
                </section>

                <section className="contact-section">
                    <form action="#" method="POST" className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message"> Message</label>
                            <textarea id="message" name="message" rows="6" required></textarea>
                        </div>

                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default ContactUsPage;
