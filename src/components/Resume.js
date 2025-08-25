import React from "react";

export default function Resume() {
  return (
    <>
      <section id="resume" className="resume">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Resume</h2>
            <p>
              Extensive depth of technical expertise including front end and
              backend languages and frameworks.
            </p>
          </div>

          <div className="row">
            
            
            {/* Profiessional Experience */}
            <div>
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Software Support Technician</h4>
                <h5>2018 - 2020</h5>
                <p>
                  <em>ITC Systems</em>
                </p>
                <ul>
                  <li>
                    Identified and resolved customer’s issues in a timely manner
                    via telephone support, written correspondence and live chat
                    assisting in the reduction of call times by 8 minutes.
                  </li>
                  <li>
                    Managed customer relationships and clearly document all
                    interactions within the company database increasing customer
                    satisfaction levels by 18% for 2019.
                  </li>
                  <li>
                    Tested product issues within various environments for
                    validation and solution purposes helping to reduce update
                    times by 5%.
                  </li>
                  <li>
                    Report software/firmware bugs and customer suggestions.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Software Support Technician - Level 2</h4>
                <h5>2015 - 2018</h5>
                <p>
                  <em>Spasoft - Springer Miller Systems </em>
                </p>
                <ul>
                  <li>
                    Provied help desk suppport for and resolved customer’s
                    issues in a timely manner (via telephone support and written
                    correspondence in the reduction of call times by 8 minutes.
                  </li>
                  <li>
                    {" "}
                    Installation of software including MSSQL database on
                    corporate and independant hotel and resorts computer
                    network.
                  </li>
                  <li>
                    {" "}
                    Required to run numerous MSSQL queries required to find
                    hidden data for reports and software bugs alike.
                  </li>
                  <li>Trained hotel staff in the usage of Spasoft software.</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Business Marketing - Diploma | Humber College</h4>
              <p>
                <em>Toronto, ON</em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
