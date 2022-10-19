import React from "react";
import { NavLink } from "react-router-dom";
import LogoBlanc from "../assets/images/logoblanc.png";
import Fep from "../assets/images/FEP_CSO.png";
export default function Footer() {
  return (
    <>
      <footer>
        <div id="vague">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M0.00,49.98 C244.07,147.84 402.09,-62.33 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
          </svg>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none"></svg>
        </div>
        <div className="footer">
        <img src={LogoBlanc} alt="logo Dfacilities Blanc" />
          <div className="footer-menu">
            <NavLink to="/"  exact title="liens vers la page d'accueil">L'entreprise</NavLink>
            <NavLink  to="/qui-sommes-nous" exact title="liens vers qui sommes nous">Qui sommes nous</NavLink>
            <NavLink to="/nos-prestations" exact title="liens vers la page d'accueil de nos prestations">Nos prestations</NavLink>
            <NavLink to ="/actualite" exact title="liens vers la page d'accueil de nos actualités">Actualite</NavLink>
            <NavLink to="/contact" exact title="liens vers la page de contact">contact</NavLink>
          </div>    
          <div className="address">
            <div className="container">
              <div className="title-address">
                D-Facilities <br />
                <p>Propreté & Services Associés</p>
              </div>
              <div className="content-address">
                <p>4 route du Lavoir - Lot 5 </p>
                <p> 40230 Saint Geours de Maremne- France</p>
                <p>Tel:+33(0)5.58.43.46.84</p>
              </div>
            </div>
          </div>       
          <div className="reseau">
          <img src={Fep} alt="logo du monde de la propreté" />
            <p>Suivez nous sur les résaux sociaux</p>
            <div className="line"></div>
            <div className="footer-icons">
              <div>
                <a href="https://www.facebook.com/dfacilitiesproprete" className="network" title="lien vers la page facebook dfacilities">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/company/d-facilities/" className="network" title="lien vers la page likedindfacilities">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/d_facilities_proprete/?fbclid=IwAR2KDZM7hvK9TNq5XaMFd54r74hboRRKG9FUxhYMorm9CkZ5bZHkbk9zXEA" className="network" title="lien vers la page instagram dfacilities">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="line"></div>
            <NavLink to="/mentions" exact title="lien vers les mentions légales">Mentions Légales et Vie Privée</NavLink>
          </div>      
        </div>  
        <p className="copy"> &copy;2022 Ruet cindy tout droits réservés</p>
      </footer>
    </>
  );
}
