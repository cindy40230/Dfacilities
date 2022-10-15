import React from "react";

export default function SocialNetwork() {
  const animation = () => {
    let navLink = document.querySelectorAll(".social-network li");
    navLink.forEach((link) => {
      link.addEventListener("mouseover",(e) => {
        let attrX = e.offsetX - 10;
        let attrY = e.offsetY - 10;
        link.style.transform = `translate(${attrX}px,${attrY}px`;
      });
      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };

  return (
    <div className="social-network">
      <ul className="content">       
          <li >
          <a
          href="https://www.facebook.com/dfacilitiesproprete"
          rel="noreferrer"
          target="_blank"
          title="liens pour se diriger vers la page facebook D-Facilities"
          className="hover"
          onMouseOver={animation}
        >
            <i className="fab fa-facebook-f"></i>
            </a>
          </li>        
          <li>
          <a
          href="https://www.linkedin.com/company/d-facilities/"
          rel="noreferrer"
          target="_blank"
          title="liens pour se diriger vers la page linkedin D-Facilities"       
          className="hover"
          onMouseOver={animation}
        >
            <i className="fab fa-linkedin"></i>
            </a>
          </li>  
          <li>
          <a
          href="https://www.instagram.com/d_facilities_proprete/?fbclid=IwAR2KDZM7hvK9TNq5XaMFd54r74hboRRKG9FUxhYMorm9CkZ5bZHkbk9zXEA"
          rel="noreferrer"
          title="liens pour se diriger vers la page instagram D-Facilities"
          className="hover"
          target="_blank"
          onMouseOver={animation}
        >
            <i className="fab fa-instagram"></i>
            </a>
          </li>    
      </ul>
    </div>
  );
}
