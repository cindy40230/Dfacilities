
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";
import { v4 as uuidv4 } from "uuid";
import { getPartenaires } from "../../redux/partenaires/partenaireReducer";
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
        {partenaires.map((item) => {
                    return (
        <div className="slide-holder" key={uuidv4()}>
          <div className="partenairs_card">
            <div className="partenairs_img">
              <img src={item.partenaires_image} alt={item.partenaires_name}  />
            </div>
            <div className="partenairs_content">
              <div className="partenairs_title">
              {item.partenaires_name}  
              </div>
              <div className="partenairs_sub_title">
              {item.partenaires_subTitle}  
              </div>
              <p> 
              {item.partenaires_description}          
              </p>
              <div className="partenairs_logo_social">
              {item.reseau.map((reseau)=>{
                return(
                  <div>
                  <a href={reseau.reseau_source} className="network hover" target="_blank" rel="noreferrer" >
                    <i className={reseau.reseau_icone}></i>
                  </a>               
               </div> 
                );
              })}
                <div>
                  <a href="/#" title="aucun lien" className="network hover" target="_blank" rel="noreferrer">
                    <i className=""></i>
                  </a>               
               </div>   
             </div>
          </div>
        </div>
        </div>
        );
      })}
    
      </Carousel>
    </div>
  );
}
