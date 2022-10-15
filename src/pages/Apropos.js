import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SlideApropos from "../composants/SlideApropos";
import NouvelleAquitaine from "../assets/images/region2.png";
import SlidePartenaire from "../composants/SlidePartenaire";
import AOS from "aos";
import "aos/dist/aos.css";

export const QuiSommeNous = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
     <main>
      <div className="a-propos">
        <div className="a-propos-main">
          <div className="a-propos-content">
            <h1>Qui Sommes nous ?</h1>
            <p>D-Facilities</p>
          </div>
          <div className="a-propos-text-content" data-aos="zoom-in-left">
            <SlideApropos />
            <div className="container-button">
              <NavLink
                to="/nos-domaines"
                title="liens vers nos domaines d'activite"
                exact
                className="hover button"
                rel="noopener noreferrer"
              >
                {" "}
                ⇨{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
     </main> 
   
    </>
  );
};

export const NosDomaine = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
     <main>
      <div className="a-propos">
        <div className="a-propos-main">
          <div className="a-propos-content">
            <h1>Nos Domaines D'activité</h1>
            <p>Nouvelle-Aquitaine ,Toulouse et ses alentours</p>
          </div>
          <div className="a-propos-text-content" data-aos="zoom-in">
            <div className="contente_domaine">
              <div className="cadre_domaine">
                <div className="Ddomaine">
                  <img src={NouvelleAquitaine} alt="carte de la nouvelle aquitaine" />
                  <p>
                    Nous avons la capacité d'intervenir sur toute la
                    Nouvelle-Aquitaine mais aussi sur Toulouse et ses alentours.
                  </p>
                </div>
              </div>
              <div className="domaine_competence">
                <h2>Nous intervenons dans les domaines suivants :</h2>
                <ul>
                  <li>Tertiaire (Bureaux, banques, …)</li>
                  <li>
                    Industriel (Entrepôts, Usines, Plateformes logistiques)
                  </li>
                  <li> Médical (Cabinets médicaux, pharmacies …)</li>
                  <li>
                    {" "}
                    Bâtiment et Travaux Publics (Nettoyage de fin de chantier,
                    entretien des bungalows, …)
                  </li>
                  <li>
                    Petite, Moyenne, et Grande distribution (Commerces, magasins
                    de proximité, galeries marchandes, surfaces de vente, …)
                  </li>
                  <li> Résidences / Copropriétés </li>
                  <li> Administrations</li>
                  <li>Transport</li>
                </ul>
              </div>
            </div>
            <div className="container-button">
              <NavLink
                to="/qui-sommes-nous"
                title="lien permettant de revenir sur la page d'accueil qui sommes nous"
                exact
                className="hover button"
                rel="noopener noreferrer"
              >
                {" "}
                ⇦{" "}
              </NavLink>
              <NavLink
                to="/nos-partenaires"
                title="lien permettant d'aller sur la page de nos partenaires"
                exact
                className="hover button"
                rel="noopener noreferrer"
              >
                {" "}
                ⇨{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      </main>  
    </>
  );
};
export const NosPartenaires = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <> 
     <main>
      <div className="a-propos">
        <div className="a-propos-main">
          <div className="a-propos-content">
            <h1>Nos Partenaires</h1>
            <p></p>
          </div>
          <div className="a-propos-text-content" data-aos="zoom-in-left">
            <SlidePartenaire />
            <div className="container-button">
              <NavLink
                to="/nos-domaines"
                title="liens vers nos domaines d'activite"
                exact
                className="hover button"
                rel="noopener noreferrer"
              >
                {" "}
                ⇦ {" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      </main>  
    </>
  );
};
