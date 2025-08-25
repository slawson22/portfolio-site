import React from 'react';
import Typed from 'react-typed';


export default function Hero(){

    return (
        <>
        <section id="hero" className="d-flex flex-column justify-content-center ">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>Steven Lawson</h1>
                
                <p><span className="typed">
                    <Typed
                        strings={["Problem Solver", "Team Leader", "Technical Service Specialist", "Web Developer"]}
                        typeSpeed={60}
                        startDelay={1000}
                        backDelay={1000}
                        loop
                    />
                </span></p>


                <div className="social-links">
                    <a href="https://twitter.com/StevenLawson22" target="_blank" rel="noreferrer" className="twitter"></a>
                    <a href="https://www.facebook.com/profile.php?id=100090054874733" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="https://www.instagram.com/stevenlawsonphoto/" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/steve-r-lawson/" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </section>
        </>
    )
}
