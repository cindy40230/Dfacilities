import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";
import Objectifs from "../assets/images/objectif.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getEquipe } from "../redux/equipe/equipeReducer";
import David from '../assets/images/David.jpg';

export default function SlideApropos() {
  const { equipe } = useSelector((state) => ({
    ...state.equipeReducer,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    if (equipe.length === 0) {
      dispatch(getEquipe());
    }
    console.log(equipe);
  });

  return (
    <div>
      <Carousel
        showThumbs={true}
        //showThumbs={false}
        showStatus={false}
        showArrows={true}
        infiniteLoop
        // emulateTouch
        autoPlay
        interval={5000}
        useKeyboardArrows
        transitionTime={1000}
        // axis="vertical"
        // selectedItem={1}
        width="600px"
        heigth="500px"
       
      >
        <div className="slide-holder">
          <div className="text-container">
            <h2>Nos Valeurs</h2>
            <div className="project-circle">
              <img src={Objectifs} alt="" />
            </div>
            <p>
            Créée par <span className="span-apropos">David SOURIGUES  </span>, en Septembre 2020, la société D-FACILITIES est une entreprise de propreté et de services associés, installée sur la commune de Saint Geours de Maremne dans les Landes. 
                    Néanmoins D-FACILITIES possède des subdivisions sur les départements 64, 33 et 31.<br />
              
              <br />
              Son ancrage local, source de son identité, lui permet d’articuler ses prestations, et de mettre à disposition son expertise ainsi que ses compétences sur tout le Sud-ouest, ce qui lui permet de garantir proximité et réactivité. 
              D-FACILITIES, propose à tous les professionnels, une gamme de prestations de nettoyage et d’entretien complète. 

            </p>
          </div>
        </div>

            <div className="slide-holder">
              <div className="text-container">
                <h2>L'équipe</h2>

                <div className="equipe_content">
                  <div>
                    <img src={David} alt="represente l'équipier"/>
                    <p>
                      <span className="span-apropos">
                       SOURIGUES-GAVINET David
                      </span>{" "}
                      <br /> <em>Gérant</em>{" "}
                    </p>
                  </div>
                  <div>
                    <p>
                    « Ce qui m’a toujours animé, c’est de pouvoir conjuguer proximité sociale, avec mes collaborateurs et mes clients, ainsi que réactivité et professionnalisme. J’ai à cœur de démontrer que le social, n’est pas incompatible avec la gestion inhérente à notre métier. La valorisation de notre métier, ainsi que l’amélioration du cadre de travail de mes collaborateurs et au cœur de mes préoccupations. Mon engagement au sein de la Fédération des entreprises de propreté, va évidemment dans ce sens. J’ai également à cœur, d’investir continuellement dans de nouvelles technologie, accentuant nos résultats sur les interventions, mais également nous permettant d’accroitre notre réactivité lors de demandes urgentes. La propreté est un métier à 1001 facettes, le rendant passionnant. Je pense que nous sommes les acteurs de l’épanouissement de nos clients et de leur collaborateurs, leur permettant d’évoluer professionnellement dans des locaux propres.<span className="span-apropos"> David SOURIGUES</span>»
                    </p>
                  </div>
                </div>
              </div>
            </div>
        
      </Carousel>
    </div>
  );
}
