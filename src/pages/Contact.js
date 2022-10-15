import React, {useEffect}from "react";
import ContactForm from "../composants/ContactForm";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardContact from "../composants/CardContact";
import { NavLink } from "react-router-dom";

export default function Contact() {

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
           <ContactForm/>
          </div>
          <div className="contact-card" data-aos="fade-left" >                 
            <CardContact/>
            <NavLink to="/devis" exact className="hover btn" title="lien vers la page de demande de devis" >
            Demander votre devis!
            </NavLink>
            {/* <a href="/dfacilities/devis" title="lien vers la page de demande de devis" className="btn"> Demander votre devis!</a> */}
          </div>
          </div>
        </div>
        </main>

  

    </>
  );
}
