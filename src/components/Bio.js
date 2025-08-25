import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function Bio() {
  // Service-focused capabilities (feel free to tweak the % values)
  const skills = [
    ["Incident Response & Troubleshooting (L2/L3)", 95],
    ["Application Support (MSSQL / IIS)", 92],
    ["Active Directory / Identity", 90],
    ["Windows Server / Linux", 90],
    ["Scripting & Automation (Python / PowerShell)", 88],
    ["Networking (CCNA: VLANs, RSTP, VOIP)", 85],
    ["ITIL v4: Change / Problem / Request", 90],
    ["Monitoring & Log Analysis", 86],
    ["WMS / ERP (Dynamics NAV)", 88],
  ];

  // Split evenly into two columns
  const mid = Math.ceil(skills.length / 2);
  const left = skills.slice(0, mid);
  const right = skills.slice(mid);

  return (
    <>
      {/* ABOUT */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/profile-img.png`}
                className="img-fluid rounded"
                alt="Profile headshot of Steven Lawson"
                loading="lazy"
              />
            </div>

            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Technical Service &amp; Application Support Specialist</h3>
              <div className="row">
                <div className="col-lg-10">
                  <p className="mb-3">
                    ITIL v4–certified specialist delivering L2/L3 application support,
                    incident response, and service improvements across Windows and Linux
                    environments. Experienced with MSSQL, IIS, Active Directory, Dynamics
                    NAV (WMS), and Python/PowerShell automation. Focused on lowering
                    MTTR, meeting SLAs, and building maintainable knowledge bases.
                  </p>

                  <ul className="mb-0">
                    <li>
                      Owns incidents end-to-end: triage, root-cause, fix or escalate,
                      post-incident review, and knowledge article updates.
                    </li>
                    <li>
                      Implements and validates patches, config changes, and DB backups
                      with change controls and rollback plans.
                    </li>
                    <li>
                      Partners with product/ops teams to harden services, optimize
                      performance, and reduce repeat tickets via automation.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quick contact (optional) */}
              {/* <div className="mt-3 small text-muted">
                (263) 882-2782 • steven.lawson22@gmail.com
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Service Capabilities</h2>
            <p className="mb-0">
              Core strengths across incident management, application support, identity, and
              automation—grounded in ITIL practices and hands-on systems experience.
            </p>
          </div>

          <div className="row skills-content">
            <div className="col-lg-6">
              {left.map(([name, value], idx) => (
                <div className="progress" key={`left-${idx}`}>
                  <span className="skill">
                    {name}
                    <i className="val">{value}%</i>
                  </span>
                  <ProgressBar
                    animated
                    now={value}
                    max={100}
                    aria-label={`${name} proficiency ${value} percent`}
                  />
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              {right.map(([name, value], idx) => (
                <div className="progress" key={`right-${idx}`}>
                  <span className="skill">
                    {name}
                    <i className="val">{value}%</i>
                  </span>
                  <ProgressBar
                    animated
                    now={value}
                    max={100}
                    aria-label={`${name} proficiency ${value} percent`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
