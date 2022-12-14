
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";


import Resovalie from '../assets/images/resovalie_Logo-business-club.png';
import Fep from '../assets/images/FEP_CSO.png';
import Lsm from '../assets/images/logo_LSM.png';
import ATSE from '../assets/images/ATSE_logo.png';
import USTyrosse from '../assets/images/us_rugby.png';
import AVIRON from '../assets/images/AVIRON.png';
export default function SlidePartenaire() {


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
                  <a href="https://resovalie.fr/" className="network hover" target="_blank" rel="noreferrer" title="lien vers le site resovalie" >
                    <i className="fa fa-globe"></i>
                  </a>
                  <a href="https://www.facebook.com/resovalie/" className="network hover" target="_blank" rel="noreferrer" title="lien vers la page facebook resovalie" >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/resovalie/?originalSubdomain=fr" className="network hover" target="_blank" rel="noreferrer" title="lien vers le linkedin de resovalie">
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
              L'entreprise D-Facilities est adh??rente de la F??d??ration des Entreprises de Propret??;  
              </p>
              <div className="partenairs_logo_social">
                  <div>
                  <a href="https://www.monde-proprete.com/" className="network hover" target="_blank" rel="noreferrer" title="lien vers le site de la f??d??ration des entreprises de propret??">
                    <i className="fa fa-globe"></i>
                  </a>
                  <a href="https://www.facebook.com/mondedelaproprete/" className="network hover" target="_blank" rel="noreferrer" title="lien vers la page de facebook fep">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/mondedelaproprete/" className="network hover" target="_blank" rel="noreferrer" title="lien vers le instagram de fep">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href=" https://twitter.com/FedeProprete" className="network hover" target="_blank" rel="noreferrer" title="lien vers le twitter de fep" >
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
                  <a href="https://www.lsmenuiserie.fr/" className="network hover" target="_blank" rel="noreferrer" title="lien vers le site de LS Menuiserie  ">
                    <i className="fa fa-globe"></i>
                  </a>
                  <a href="https://www.facebook.com/LSMenuiserie33/" className="network hover" target="_blank" rel="noreferrer" title="lien vers la page facebook de LS Menuiserie  " >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/ls-menuiserie-8787a0217/" className="network hover" target="_blank" rel="noreferrer" title="lien vers le linkedin de LS Menuiserie  " >
                    <i className="fab fa-linkedin"></i>
                  </a> 
                  <a href="https://www.instagram.com/lsmenuiserie/" className="network hover" target="_blank" rel="noreferrer" title="lien vers le instagram de LS Menuiserie  " >
                    <i className="fab fa-instagram"></i>
                  </a>                  
               </div>          
                
             </div>
          </div>
        </div>
        </div>
        <div className="slide-holder"  >
          <div className="partenairs_card">
            <div className="partenairs_img">
              <img src={ATSE} alt="" />
            </div>
            <div className="partenairs_content">
              <div className="partenairs_title">
              ATSE PHOTOVOLATAIQUE 
              </div>
              <div className="partenairs_sub_title">
              ATS ??lectricit?? est leader r??gional dans la pose de panneaux photovolta??ques
              </div>
              <p>
              L'entreprise D-Facilities est un partenaire de ATSE PHOTOVOLATAIQUE
              </p>
              <div className="partenairs_logo_social">
                  <div>
                  <a href="https://www.ats-photovoltaique.com/accueil-1" className="network hover" target="_blank" rel="noreferrer" title="lien vers le site de ATSE PHOTOVOLATAIQUE  ">
                    <i className="fa fa-globe"></i>
                  </a>                                
               </div>                          
             </div>
          </div>
        </div>
        </div>
        <div className="slide-holder"  >
          <div className="partenairs_card">
            <div className="partenairs_img">
              <img src={USTyrosse}  alt="" />
            </div>
            <div className="partenairs_content">
              <div className="partenairs_title">
              US TYROSSE Rugby
              </div>
              <div className="partenairs_sub_title">
              US Tyrosse Rugby C??te Sud
              </div>
              <p>
              D-FACILITIES est partenaire Puissace XV de l???US TYROSSE Rugby
              </p>
              <div className="partenairs_logo_social">
                  <div>
                  <a href="https://ustyrosse.com/" className="network hover" target="_blank" rel="noreferrer" title="lien vers le site de US TYROSSE Rugby">
                    <i className="fa fa-globe"></i>
                  </a>
                  <a href="https://www.facebook.com/ustyrosserugby/" className="network hover" target="_blank" rel="noreferrer" title="lien vers la page facebook de US TYROSSE Rugby">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/ustyrosserugby/" className="network hover" target="_blank" rel="noreferrer" title="lien vers le linkedin de US TYROSSE Rugby">
                    <i className="fab fa-linkedin"></i>
                  </a> 
                  <a href="https://twitter.com/ustyrosserugby" className="network hover" target="_blank" rel="noreferrer" title="lien vers le twitter de US TYROSSE Rugby" >
                    <i className="fab fa-twitter"></i>
                  </a>                                    
               </div>                          
             </div>
          </div>
        </div>
        </div>
        <div className="slide-holder"  >
          <div className="partenairs_card">
            <div className="partenairs_img">
              <img src={AVIRON}  alt="" />
            </div>
            <div className="partenairs_content">
              <div className="partenairs_title">
              AVIRON BAYONNAIS
              </div>
              <div className="partenairs_sub_title">
              l???Aviron Bayonnais rugby Pro 
              </div>
              <p>
              D-FACILITIES est partenaire de l???Aviron Bayonnais rugby Pro pour la saison 2022/2023
           
              </p>
              <div className="partenairs_logo_social">
                  <div>
                  <a href="#" className="network hover" target="_blank" rel="noreferrer" title=" ">
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
