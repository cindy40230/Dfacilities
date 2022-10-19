import React from "react";
import Loop from "../composants/Loop";
import VitresCard from "../assets/images/CARTE_VITRERIE.jpg";
import RemiseEnEtatCard from "../assets/images/CARTE_REMISE_EN ETAT.jpg";
import BureauCard from "../assets/images/CARTE_ENTRETIEN_COURANT.jpg";
import CleanningCard from "../assets/images/cleanning.jpg";
import Panneau from "../assets/images/panneau_soleil.png";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <>
      <main>
        <Loop />
        <div className="fond">
        <section id="entreprise">
          <h2>L'entreprise</h2>
          <div className="description">
            <p>
              Créée par <span>David SOURIGUES</span>, en Septembre 2020, la société <span>D-FACILITIE</span> est une entreprise de propreté et de services associés, installée sur la commune de Saint Geours de Maremne dans les Landes. 
              Néanmoins D-FACILITIES possède des subdivisions sur les départements 64, 33 et 31.       
              <br />
              Son ancrage local, source de son identité, lui permet d’articuler ses prestations, et de mettre à disposition son expertise ainsi que ses compétences sur <span>tout le Sud-ouest,</span>  ce qui lui permet de garantir proximité et réactivité. 
D-FACILITIES, propose à tous les professionnels, une gamme de prestations de nettoyage et d’entretien complète. <br />
              
            </p>
          </div>
        </section>
        <section id="prestation">
          <h2>Nos prestations</h2>
          <div className="pictures">
            <div className="flip-box">
              <NavLink to="/entretien-courant" exact title="liens vers la fiche entretien courant">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <p>Entretien courant</p>
                    <img src={BureauCard} alt="représente l'entretien courant" />
                  </div>
                  <div className="flip-box-back">
                    <p>
                      Nettoyage de Bureau,
                      <br />
                      de locaux commerciale,
                      <br />
                      d'hôtel,de structure d'hébergement,
                      <br />
                      Nettoyage professionnel d'appartement,de maison,et de
                      coproprieté
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="flip-box">
              <NavLink to="/nettoyage-de-vitre" exact title="liens vers la fiche nettoyage de vitre">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <p>entretien vitrerie</p>
                    <img src={VitresCard} alt="represente la vitrerie"/>
                  </div>
                  <div className="flip-box-back">
                    <p>
                      Nous vous proposons des prestations specifiques pour le
                      nettoyage de vos vitres.Les Spécialistes c'est nous!{" "}
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="flip-box">
              <NavLink to="nettoyage-de-panneau" exact title="liens vers la fiche nettoyage panneau photovoltaique">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <p>entretien de panneau photovoltaique</p>
                    <img src={Panneau} alt="represente la vitrerie"/>
                  </div>
                  <div className="flip-box-back">
                    <p>
                      Nous vous proposons des prestations specifiques pour le
                      nettoyage de vos panneaux photovoltaique!{" "}
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="flip-box">
              <NavLink to="/remise-en-etat" exact title="liens vers la fiche remise en état">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <p>remise en etats</p>
                    <img src={RemiseEnEtatCard} alt="represente la remise en état" />
                  </div>
                  <div className="flip-box-back">
                    <p>
                      Remise en état de biens après vos travaux ou un sinistres.{" "}
                      <br />
                      Un dépoussiérage global <br />
                      Décapage des sols <br />
                      Un nettoyage des vitres <br />
                      etc...
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="flip-box">
              <NavLink to="/desinfection"  exact title="liens vers la fiche désinfection covid19">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <p>Desinfection covid19</p>
                    <img src={CleanningCard} alt="represente la desinfectation covid19" />
                  </div>
                  <div className="flip-box-back">
                    <p>
                      {" "}
                      Nos équipes de nettoyage vous soulage de cette charge et
                      interviennent avec un processus de nettoyage et
                      désinfection garantissant des résultats très
                      satisfaisants.{" "}
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
          <NavLink to="/devis" exact className="hover btn" title="lien vers la page de demande de devis" >
            Demander votre devis!
            </NavLink>
        </section>
        <section id="avis">
          <h2>Ils m'ont fait confiance</h2>
          <div className="elfsight-app-1ca32861-3bd9-4979-9337-5b0f79cfb661"></div>
        </section>
        </div>
      </main>
    </>
  );
}
