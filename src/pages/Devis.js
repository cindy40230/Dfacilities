import React, {useEffect}from "react";
import DevisForm from "../composants/DevisForm";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardContact from "../composants/CardContact";
import PhotoDevis from "../assets/images/devis.jpg";
export default function Devis() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <>  
      <main>
      <div className="contact">
        <iframe title="carte de l'emplacement d-facilities" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=400&amp;hl=en&amp;q=4%20route%20du%20lavoir%20lot-5%2040230%20saint-geours-de-maremne+(D-Facilities)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="http://www.gps.ie/">sport gps</a></iframe>
        <div className="main-contact">    
          <div className="contact-content" data-aos="fade-right">           
           <DevisForm/>
          </div>       
          <div className="contact-card" data-aos="fade-left" >
          <img src={PhotoDevis} alt="represente un devis" data-aos="flip-right" />
            <CardContact/>
            
          </div>
          </div>
        </div>
        </main>
    </>
  );
}
