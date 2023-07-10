import React from 'react';
import { ProgressBar } from 'react-bootstrap';


export default function Bio(){

    const progressBar = {
        'CSS': 70,
        'HTML': 80,
        'REACT JS': 70,
        'JAVASCRIPT': 65,
        'PHOTOSHOP': 70,
        'MSSQL': 65,
        'PYTHON': 60,
        'MICROSOFT OS':90,
        'MacOS/LINUX':70,
    }

    return (
        <>   
        <section id="about" className="about">
            <div className="container" >
                <div className="section-title">
                    <h2>About</h2>
                </div>
                
                <div className="row">
                    <div className="col-lg-4">
                        <img src={require("../img/profile-img.jpg")} className="img-fluid" alt="" />
                    </div>
                   
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Software &amp; Web Developer</h3>
                        <p className="fst-italic"></p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Self Taught Programmer</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                                <p>A self-taught programmer with a love for photography who has developed a strong foundation through extensive practice and self-study.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="skills" className="skills section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Skills</h2>
                    <p>Proficient in front-end and back-end development that includes a deep understanding of HTML, CSS, JavaScript, MSSQL and Python.</p>
                </div>

                <div className="row skills-content">
                    <div className="col-lg-6">
                        {Object.entries(progressBar).slice(0,4).map(([key, value]) => (
                            <div className="progress">
                                <span className="skill">{key}<i className="val">{value}%</i></span>
                                    <ProgressBar 
                                        animated
                                        now={value}
                                        max={100}
                                    />
                            </div>
                        ))}
                    </div>

                    <div className="col-lg-6">    
                        {Object.entries(progressBar).slice(5,10).map(([key, value]) => (
                            <div className="progress">
                                <span className="skill">{key}<i className="val">{value}%</i></span>
                                    <ProgressBar 
                                        animated
                                        now={value}
                                        max={100}
                                    />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}
