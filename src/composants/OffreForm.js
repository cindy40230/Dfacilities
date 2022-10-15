import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
//init("user_NXpRc712WRUax6AVxalGD");
init("user_3uyaG8UWk8oxBdtTawPXO");
const OffreForm = () => {
  const [reference, setReference] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [cv, setCv] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    let referenceS = document.getElementById("reference");
    let lastNameS = document.getElementById("lastname");
    let firstNameS = document.getElementById("firstname");
    let emailS = document.getElementById("email");
    let telS = document.getElementById("tel");
    let cvS = document.getElementById("cv");
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

    if (lastName && firstName && isEmail() && tel && cv && reference) {
      referenceS.classList.remove("red");
      lastNameS.classList.remove("red");
      firstNameS.classList.remove("red");
      emailS.classList.remove("red");
      telS.classList.remove("red");
      cvS.classList.remove("red");

      formMess.innerHTML = "Message en cours d'envoi...";
      formMess.style.backgroundColor = "#ADF1C0";
      formMess.style.color = "green";
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
            tel,
            cv,
            reference
          },
          // your user ID (protégé par .env)
          process.env.REACT_APP_EMAILJS_KEY
        )
        .then(
          () => {
            formMess.innerHTML =
              "Message envoyé ! Je vous recontacterai dès que possible.";
              document.getElementById("reference").classList.remove("error");
            document.getElementById("lastname").classList.remove("error");
            document.getElementById("firstname").classList.remove("error");
            document.getElementById("email").classList.remove("error");
            document.getElementById("tel").classList.remove("error");
            document.getElementById("cv").classList.remove("error");

            setReference("");
            setLastName("");
            setFirstName("");
            setEmail("");
            setTel("");
            setCv("");

            setTimeout(() => {
              formMess.style.opacity = "0";
            }, 5000);
          },
          (err) => {
            console.log(err);
            formMess.style.color = "red";
            formMess.style.backgroundColor = "#ffad7db9";
            formMess.innerHTML =
              "Une erreur s'est produite, veuillez réessayer.";
          }
        );
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.color = "red";
      formMess.style.backgroundColor = "#ffad7db9";
      formMess.style.opacity = "1";

      if (!reference) {
        referenceS.classList.add("error");
      }
      if (!lastName) {
        lastNameS.classList.add("error");
      }
      if (!firstName) {
        firstNameS.classList.add("error");
      }
      if (!email) {
        emailS.classList.add("error");
      }
      if (!tel) {
        telS.classList.add("error");
      }
      if (!cv) {
        cvS.classList.add("error");
      }
    }
  };

  return (
    <form className="contact-form_offre" enctype="multipart/form-data" >
      <p className="text">Je postule chez</p>
      <h3>D-FACILITIES</h3>
     
      <div className="form-content-offre">
      <div className="form-content-last-first">
      
      </div>
        <div className="form-content-last-first">
          <label htmlFor="lastname">
            Votre nom <span>*</span>
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <label htmlFor="firstname">
            Votre prénom <span>*</span>
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            required
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className="form-content-last-first">
          <label htmlFor="tel">
            Votre téléphone <span>*</span>
          </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            required
            onChange={(e) => setTel(e.target.value)}
            value={tel}
          />

          <label id="not-mail">Email non valide</label>
          <label htmlFor="email">
            Votre email <span>*</span>
          </label>
          <input
            type="mail"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-content-last-first">
        <label htmlFor="reference">
            Reférence annonce <span>*</span>
          </label>
          <input
            type="text"
            id="reference"
            name="reference"
            required
            onChange={(e) => setReference(e.target.value)}
            value={reference}
          />
          <label htmlFor="cv">
            Votre Cv <span>*</span>
          </label>
          <input
            type="file"
            id="cv"
            name="cv"
            required
            onChange={(e) => setCv(e.target.value)}
            value={cv}
         
          />
          
        </div>
      </div>
      <input
        className=" hover btn_submit"
        type="submit"
        value="envoyer"
        onClick={(e) => handleSubmit(e)}
      />
      <div className="formMessage"></div>
    </form>
  );
};

export default OffreForm;
