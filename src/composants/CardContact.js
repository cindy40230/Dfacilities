import React from "react";
import LogoBlanc from "../assets/images/logoblanc.png";

export default function CardContact() {
  return (
    <>
     <div className="contact-card-address">
                  <div className="card">
                    <div className="front">
                      <img src={LogoBlanc} alt="logo D-facilities" />
                      <h4>D-Facilities</h4>
                      <p>Propreté & Services Associés</p>
                      <hr />
                      <div className="container-social">
                        <a href="https://www.linkedin.com/company/d-facilities/" target="_blanck" title="liens pour se diriger vers la page linkedin D-Facilities">
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.facebook.com/dfacilitiesproprete" target="_blanck"  title="liens pour se diriger vers la page facebook D-Facilities">
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/d_facilities_proprete/?fbclid=IwAR2KDZM7hvK9TNq5XaMFd54r74hboRRKG9FUxhYMorm9CkZ5bZHkbk9zXEA" target="_blanck"
                            title="liens pour se diriger vers la page instagram D-Facilities">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="back">
                      <div className="container-info">
                        <p>
                          <i className="fa fa-map-marker"></i> 4 route du Lavoir -
                          Lot 5{" "}
                        </p>
                        <p> 40230 Saint Geours de Maremne</p>
                        <p>
                          <i className="fa fa-phone"></i> Tel:+33(0)5.58.43.46.84{" "}
                          <br /> <i className="fa fa-phone"></i>{" "}
                          Port:+33(0)6.45.93.74.20
                        </p>
                        <p>
                          <i className="fa fa-envelope"></i> contact@dfacilities.fr
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
     
    </>
  );
}