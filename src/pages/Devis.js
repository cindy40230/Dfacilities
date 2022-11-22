import React, {useEffect}from "react";
import DevisForm from "../composants/DevisForm";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardContact from "../composants/CardContact";
import PhotoDevis from "../assets/images/devis.jpg";
export default function Devis() {
  
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
  api: "https://dfacilities.fr/api/devis/index.php",
  title: 'Demandez votre devis !',
  description: 'Que vous soyez professionnel ou particulier, n’hésitez pas à contacter D-facilities, votre expert pour le nettoyage et ses services associés.',
  successMessage: 'Message envoyé ! Je vous recontacterai dès que possible.',
  errorMessage: "Une erreur s'est produite, veuillez réessayer.",
  fields:{
    firstName: '',
    lastName: '',
    email: '',
    adresse:'',
    codePostal:'',
    ville:'',
    tel:'',
    msg1: '',
    msg2: '',
  },
  fieldsConfig:  [
   { id: 1, fieldName: 'firstName', type: 'text',placeholder:'Votre Nom', isRequired: true , klassName:'first-name-field'},
   { id: 2, fieldName: 'lastName', type: 'text', placeholder: 'Votre Prénom', isRequired: true , klassName:'last-name-field'},
   { id: 3, fieldName: 'email', type: 'email', placeholder: ' Votre Email', isRequired: true , klassName:'email-field'},
   { id: 4, fieldName: 'adresse', type: 'text', placeholder: 'Votre adresse', isRequired: true , klassName:'last-name-field'},
   { id: 5, fieldName: 'codePostal', type: 'text', placeholder: 'Votre code postal', isRequired: true , klassName:'last-name-field'},
   { id: 6, fieldName: 'ville', type: 'text', placeholder: 'Votre ville', isRequired: true , klassName:'last-name-field'},
   { id: 7, fieldName: 'tel', type: 'number', placeholder: 'Votre telephone', isRequired: true , klassName:'last-name-field'},
   { id: 8, fieldName: 'msg1', type: 'textarea',placeholder:'Votre demande de devis - Avez vous déjà une société de nettoyage ? - Si oui, à quelle fréquence de passage ?', isRequired: true , klassName:'message-field'},
   { id: 9, fieldName: 'msg2', type: 'textarea',placeholder:"Superficie - Nature des Sols - Nombre de Sanitaires - Temps estimer de passage de(s) agent(s) d'entretien ", isRequired: true , klassName:'message-field'}
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
           <DevisForm  config={config}/>
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
