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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate suscipit commodi enim magni nobis. Cum in magni natus nesciunt tenetur veritatis autem distinctio consequuntur consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate suscipit commodi enim magni nobis. Cum in magni natus nesciunt tenetur veritatis autem distinctio consequuntur consequatur!</p>
                  </div>
                </div>
              </div>
            </div>
        
      </Carousel>
    </div>
  );
}
