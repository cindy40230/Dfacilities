import React, {useEffect}from "react";
import ContactForm from "../composants/ContactForm";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardContact from "../composants/CardContact";
import { NavLink } from "react-router-dom";

export default function Contact() {

/**
 * @config preparing config prop.
 * api: url for the server endpoint
 * title: form title
 * successMessage: message will show in the UI when mail is successfully sent.
 * errorMessage: message will show in the UI when mail is not sent.
 * fields: this is the name of each field. This should be exact order of the fieldsConfig and fieldsConfig.fieldName should be  the same
 * fieldsConfig = settings for each input/textarea field
 */
 const config = {
  api: "https://cindy-ruet.fr/api/contact/index.php",
  title: 'Contactez-nous !',
  description: 'Que vous soyez professionnel ou particulier, n’hésitez pas à contacter D-facilities, votre expert pour le nettoyage et ses services associés.',
  successMessage: 'Message envoyé ! Je vous recontacterai dès que possible.',
  errorMessage: "Une erreur s'est produite, veuillez réessayer.",
  fields:{
    firstName: '',
    lastName: '',
    email: '',
    msg: ''
  },
  fieldsConfig:  [
   { id: 1, fieldName: 'firstName', type: 'text',placeholder:'Votre Nom', isRequired: true , klassName:'first-name-field'},
   { id: 2, fieldName: 'lastName', type: 'text', placeholder: 'Votre Prénom', isRequired: true , klassName:'last-name-field'},
   { id: 3, fieldName: 'email', type: 'email', placeholder: ' Votre Email', isRequired: true , klassName:'email-field'},
   { id: 4, fieldName: 'msg', type: 'textarea',placeholder:'Votre message....', isRequired: true , klassName:'message-field'}
  ]
}

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
           <ContactForm config={config}/>
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
