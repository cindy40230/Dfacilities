import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
//init("user_NXpRc712WRUax6AVxalGD");
init("user_3uyaG8UWk8oxBdtTawPXO");
const ContactForm = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let lastNameS = document.getElementById("lastname");
    let firstNameS = document.getElementById("firstname");
    let emailS = document.getElementById("email");
    let messageS = document.getElementById("message");
    let formMess = document.querySelector(".formMessage");

    const isEmail = () => {
      let isMail = document.getElementById("not-mail");
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (email.match(regex)) {
        isMail.style.display = "none";
        return true;
      } else {
        isMail.style.display = "block";
        isMail.style.animation = "dongle 1s";
        setTimeout(() => {
          isMail.style.animation = "none";
        }, 1000);
        return false;
      }
    };

    if (lastName && firstName && isEmail() && message) {

      firstNameS.classList.remove("red");
      lastNameS.classList.remove("red");
      emailS.classList.remove("red");
      messageS.classList.remove("red");

      formMess.innerHTML = "Message en cours d'envoi...";
      formMess.style.backgroundColor= "#ADF1C0";
      formMess.style.color= "green";
      formMess.style.opacity = "1";

      // voir doc : https://www.emailjs.com/docs/examples/reactjs/
      emailjs
        .send(
          // your service ID
          "service_37d2mec",
          // your template ID
          "template_wg4guog",
          {
            lastName,
            firstName,
            email,
            message,
          },
          // your user ID (protégé par .env)
          process.env.REACT_APP_EMAILJS_KEY
        )
        .then(
          () => {
            formMess.innerHTML =
              "Message envoyé ! Je vous recontacterai dès que possible.";

            document.getElementById("lastname").classList.remove("error");
            document.getElementById("firstname").classList.remove("error");
            document.getElementById("email").classList.remove("error");
            document.getElementById("message").classList.remove("error");
            setFirstName("");
            setLastName("");
            setEmail("");
            setMessage("");

            setTimeout(() => {
              formMess.style.opacity = "0";
            }, 5000);
          },
          (err) => {
            console.log(err);
            formMess.style.color = "red";
            formMess.style.backgroundColor= "#ffad7db9";
            formMess.innerHTML =
              "Une erreur s'est produite, veuillez réessayer.";
          }
        );
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.color= "red";
      formMess.style.backgroundColor= "#ffad7db9";
      formMess.style.opacity = "1";

      if (!lastName) {
        lastNameS.classList.add("error");
      }
      if (!firstName) {
        firstNameS.classList.add("error");
      }
      if (!email) {
        emailS.classList.add("error");
      }
      if (!message) {
        messageS.classList.add("error");
      }
    }
  };

  return (
    <form className="contact-form" >
      <h3>Contactez-nous!</h3>
      <p className="text" >Que vous soyez professionnel ou particulier, n’hésitez pas à contacter D-facilities, votre expert pour le nettoyage et ses services associés.</p>
      <div className="form-content">
        
        <input
            type="text"
            id="lastname"
            name="lastname"
            required
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Votre nom *"
            value={lastName}
          />
          <input
            type="text"
            id="firstname"
            name="firstname"
            required
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Votre prénom *"
            value={firstName}
          />

        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre email *"
            value={email}
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Votre message *"
          value={message}
          required
        />
      </div>
      <input
        className=" hover button2"
        type="submit"
        value="envoyer"
        onClick={(e) => handleSubmit(e)}
      />
      <div className="formMessage"></div>
    </form>
  );
};

export default ContactForm;