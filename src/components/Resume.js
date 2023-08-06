import React from 'react';


export default function Resume(){
    
    return (
        <>
        <section id="resume" className="resume">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Resume</h2> 
                    <p><em>A team player with excellent communciation and leadership skills with 10+ years of problem solving experience.</em></p>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item pb-0">
                            <h4>Steven Lawson</h4>
                            <ul>
                                <li>Extensive depth of technical expertise including front end and backend languages and frameworks</li>
                                <li>Exceptional customer service skills resulting in unparalleled service delivery and customer satisfaction</li>
                                <li>Advanced troubleshooting techniques for all types of technical inquiries, service requests</li>
                                <li>Self motivated ensuring optimal productivity and efficiency in all tasks undertaken</li>
                                <li>Inspired team leader fostering a supportive environment focused on improving team performance.</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Business Marketing - Diploma | Humber College</h4>
                            <p><em>Toronto, ON</em></p>
                            <p>Covered the essentials of the research study on markets, products, pricing, distribution, and promotions (through advertising, sales promotion, personal selling, and/or publicity).</p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Software Support Technician</h4>
                            <h5>2018 - 2020</h5>
                            <p><em>ITC Systems</em></p>
                            <ul>
                                <li>Identified and resolved customer’s issues in a timely manner (via telephone support, written correspondence and live chat assisting in the reduction of call times by 8 minutes.</li>
                                <li>Managed customer relationships and clearly document all interactions within the company database increasing customer satisfaction levels by 18% for 2019.</li>
                                <li>Tested product issues within various environments for validation and solution purposes helping to reduce update times by 5%.</li>
                                <li>Report software/firmware bugs and customer suggestions.</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Software Support Technician - Level 2</h4>
                            <h5>2015 - 2018</h5>
                            <p><em>Spasoft - Springer Miller Systems </em></p>
                            <ul>
                                <li>Provied help desk suppport for and resolved customer’s issues in a timely manner (via telephone support and written correspondence in the reduction of call times by 8 minutes.</li>
                                <li> Installation of software including MSSQL database on corporate and independant hotel and resorts computer network.</li>
                                <li> Required to run numerous MSSQL queries required to find hidden data for reports and software bugs alike.</li>
                                <li>Trained hotel staff in the usage of Spasoft software.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
