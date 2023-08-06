import React from 'react';

export default function Projects({title,description,src,link}){
    

    return (
        <> 
        <section id="portfolio" className="portfolio section-bg">
            <div className="container" data-aos="fade-up" >

                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>Here are a few projects that I have completed using a variety of applications and languages.</p>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/project_python.gif" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>PYTHON</h4>
                                <p>Sort through file types and place in correct folders</p>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/project_python.gif" target="_blank" data-gallery="portfoliogallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/project_react.gif" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>REACT JS</h4>
                                <p>5 day forecast weather app</p>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/project_react.gif" data-gallery="portfoliogallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/project_react_email_app.gif" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>REACT JS</h4>
                                <p>Email Application</p>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/project_react_email_app.gif" data-gallery="portfoliogallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/project_CPP_guess_game.gif" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>C++</h4>
                                <p>Guess Game: Movie titles</p>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/project_CPP_guess_game.gif" data-gallery="portfoliogallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Web 2</h4>
                                <p>Web</p>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfoliogallery"className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>App 3</h4>
                                <p>App</p>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfoliogallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Card 1</h4>
                            <p>Card</p>
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfoliogallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Card 3</h4>
                                <p>Card</p>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfoliogallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Web 3</h4>
                                <p>Web</p>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfoliogallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        </>
    )
}
