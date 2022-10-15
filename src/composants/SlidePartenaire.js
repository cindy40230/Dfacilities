
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";
import { getPartenaires } from "../redux/partenaires/partenaireReducer";

import Resovalie from '../assets/images/resovalie_Logo-business-club.png';
import Fep from '../assets/images/FEP_CSO.png';
import Lsm from '../assets/images/logo_LSM.png';
export default function SlidePartenaire() {

  const { partenaires } = useSelector((state) => ({
    ...state.partenaireReducer,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    if (partenaires.length === 0) {
      dispatch(getPartenaires());
    }
    console.log(partenaires);
  });
 

  return (
    <div>
      <Carousel
        showThumbs={true}
        showStatus={false}
        infiniteLoop
        // emulateTouch
        autoPlay
        interval={5000}
        useKeyboardArrows
        transitionTime={1000}
        width="600px"
        heigth="500px"
      > 
       
        <div className="slide-holder"  >
          <div className="partenairs_card">
            <div className="partenairs_img">
              <img src={Resovalie} alt="" />
            </div>
            <div className="partenairs_content">
              <div className="partenairs_title">
              Resovalie
              </div>
              <div className="partenairs_sub_title">
              Business Club
              </div>
              <p>
              L'entreprise D-Facilities est un partenaire de Resovalie   
              </p>
              <div className="partenairs_logo_social">
                  <div>
                  <a href="https://resovalie.fr/" className="network hover" target="_blank" rel="noreferrer" >
                    <i className="fa fa-globe"></i>
                  </a>
                  <a href="https://www.facebook.com/resovalie/" className="network hover" target="_blank" rel="noreferrer" >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/resovalie/?originalSubdomain=fr" className="network hover" target="_blank" rel="noreferrer" >
                    <i className="fab fa-linkedin"></i>
                  </a>                 
               </div>             
               
             </div>
          </div>
        </div>
        
        </div>
        <div className="slide-holder"  >
          <div className="partenairs_card">
            <div className="partenairs_img">
              <img src={Fep} alt="" />
            </div>
            <div className="partenairs_content">
              <div className="partenairs_title">
              FEP
              </div>
              <div className="partenairs_sub_title">
              Centre Sud-Ouest
              </div>
              <p>
              L'entreprise D-Facilities est adhérente de la Fédération des Entreprises de Propreté;  
              </p>
              <div className="partenairs_logo_social">
                  <div>
                  <a href="https://www.monde-proprete.com/" className="network hover" target="_blank" rel="noreferrer" >
                    <i className="fa fa-globe"></i>
                  </a>
                  <a href="https://www.facebook.com/mondedelaproprete/" className="network hover" target="_blank" rel="noreferrer" >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/mondedelaproprete/" className="network hover" target="_blank" rel="noreferrer" >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href=" https://twitter.com/FedeProprete" className="network hover" target="_blank" rel="noreferrer" >
                    <i className="fab fa-twitter"></i>
                  </a>                 
               </div>          
             *
             </div>
          </div>
        </div>
        </div>
          <div className="slide-holder"  >
          <div className="partenairs_card">
            <div className="partenairs_img">
              <img src={Lsm} alt="" />
            </div>
            <div className="partenairs_content">
              <div className="partenairs_title">
              LSM
              </div>
              <div className="partenairs_sub_title">
              Le tour sur-mesure !
              </div>
              <p>
              L'entreprise D-Facilities est un partenaire de la LS Menuiserie 
              </p>
              <div className="partenairs_logo_social">
                  <div>
                  <a href="https://www.lsmenuiserie.fr/" className="network hover" target="_blank" rel="noreferrer" >
                    <i className="fa fa-globe"></i>
                  </a>
                  <a href="https://www.facebook.com/LSMenuiserie33/" className="network hover" target="_blank" rel="noreferrer" >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/ls-menuiserie-8787a0217/" className="network hover" target="_blank" rel="noreferrer" >
                    <i className="fab fa-linkedin"></i>
                  </a> 
                  <a href="https://www.instagram.com/lsmenuiserie/" className="network hover" target="_blank" rel="noreferrer" >
                    <i className="fab fa-instagram"></i>
                  </a>                  
               </div>          
                
             </div>
          </div>
        </div>
        </div>
      </Carousel>
    </div>
  );
}
