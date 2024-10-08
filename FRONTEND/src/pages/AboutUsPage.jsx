import React from 'react';
import '../styles/AboutUs.css'; 

const AboutUsPage = () => { 
    return (
        <div>
            <header className="header">
                <h1>About My Calendar App</h1>
               
            </header>
            <main className="about-content">
                <section className="about-section">
                    <h2>Who We Are</h2>
                    <p>
                        My Calendar App was created with the goal of helping individuals organize their daily life more efficiently. We combine powerful features like task management, expense tracking, and note-taking into one seamless app.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to provide users with a simple and intuitive tool that enhances productivity and makes personal management easier, whether you're a student, professional, or entrepreneur.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Why Choose Us</h2>
                    <ul>
                        <li>Secure user authentication</li>
                        <li>Effortless task and expense management</li>
                        <li>Cross-device synchronization</li>
                        <li>Minimalist and responsive design</li>
                    </ul>
                </section>
            </main>
           
        </div>
    );
};
export default AboutUsPage;
