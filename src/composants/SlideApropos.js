import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";
import Objectifs from "../assets/images/objectif.jpg";
import David from '../assets/images/David.jpg';

export default function SlideApropos() {
 

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
              Recentrer l’humain au cœur de nos prestations. Notre force découle
              de l’épanouissement et de l’investissement de chacun de nos
              collaborateurs au travers de leur fidélisation. Avec nos clients
              Nous avons à cœur de créer, une relation unique, basée sur la
              communication, la réactivité et la satisfaction commune. <br />
              <br />
              <span className="span-apropos">Notre but ? </span>
              <br />
              S’adapter aux spécificités de vos sites afin de satisfaire chacune
              de vos demandes.
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
