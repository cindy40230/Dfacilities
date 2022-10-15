import React from "react";
import { useLocation } from "react-router-dom";
import Bouton from "../composants/Bouton";


export default function Offre() {
  const location = useLocation();
 // console.log(location);
 

  return (
    <>
      <main>
        <div className="a-propos">
          <div className="a-propos-main">
            <div className="offre">
              <div className="offre_aside">
                <h1>D-Facilities</h1>
                <p className="offre_lieu">
                  <i className="fas fa-globe-americas"></i>
                  <br />
                  {location.state.lieu}
                </p>
                <div className="offre_contrat_salaire">
                  <p className="offre_contrat">
                    <i className="fas fa-file-contract"></i>
                    <br />
                    {location.state.typeContrat}
                    <br />
                    {location.state.tempsContrat}
                    <br />
                    {location.state.dureeContrat}
                  </p>
                  <p>
                    <i className="fas fa-money-bill"></i>
                    <br />
                    {location.state.salaire}
                  </p>
                </div>

                <Bouton />
             
                <a  href="/nos-offres-emplois" className="btn">REVENIR AUX ANNONCE</a>
              </div>
              <div className="offre_content">
                <h2>{location.state.title}</h2>
                <p>Référence annonce: {location.state.reference}</p>
               
                <div className="offre_tarif_date">
                  <div>
                    <h3>HORAIRE</h3>
                    <p>{location.state.nbrHeure} / {location.state.tempsDeTravail} </p>
                  </div>
                  <div>
                    <h3>DATE DE DEBUT</h3>
                    <p>{location.state.dateDebut}</p>
                  </div>
                </div>            
                <div className="offre_description">
                 <h3>Mission</h3>
                  <p>{location.state.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
