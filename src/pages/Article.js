import React from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


export default function Article() {
  const location =useLocation();
 console.log(location);
  return (
    <>  
     <main>
      <div className="a-propos">
        <div className="a-propos-main">
          <div className="new-text-content">
            <p>{location.state.date}</p>
            <h2>{location.state.title}</h2>
            <p>{location.state.description}</p>         
            {location.state.video === '' ?         
            <div className="content-image" >         
            <img key={uuidv4 ()} src={location.state.image1} alt={location.state.image1}/>           
            <img key={uuidv4 ()} src={location.state.image2} alt={location.state.image2}/> :           
            </div>
             : (
              <div className="content-image" >
              <iframe
                className="react-player"
                src={location.state.video}
                frameBorder="0"
                allow="autoplay=0;encrypted-media"
                allowFullScreen
                title="video"
              />           
              </div>          
            )}          
            <div className="card-address">
              <div className="container-info">
                <p>Pour nous joindre :</p>
                <p>
                  <i className="fa fa-phone"></i> Tel:+33(0)5.58.43.46.84 <br />{" "}
                  <i className="fa fa-phone"></i> Port:+33(0)6.45.93.74.20
                </p>
                <p>
                  <i className="fa fa-envelope"></i> contact@dfacilities.fr
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
