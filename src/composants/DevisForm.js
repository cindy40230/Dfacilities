import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
//init("user_NXpRc712WRUax6AVxalGD");
init("user_3uyaG8UWk8oxBdtTawPXO");
const DevisForm = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let lastNameS = document.getElementById("lastname");
    let firstNameS = document.getElementById("firstname");
    // let addressS = document.getElementById("address");
    // let postalS = document.getElementById("postal");
    // let cityS = document.getElementById("city");
    let emailS = document.getElementById("email");
    let telS = document.getElementById("tel");
    let messageS1 = document.getElementById("message1");
    let messageS2 = document.getElementById("message2");
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

    if (lastName && firstName && isEmail() && tel && message1 && message2) {
      lastNameS.classList.remove("red");
      firstNameS.classList.remove("red");
      emailS.classList.remove("red");
      telS.classList.remove("red");
      messageS1.classList.remove("red");
      messageS2.classList.remove("red");

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
          "template_gjevln5",
          {
            lastName,
            firstName,
            address,
            postal,
            city,
            email,
            tel,
            message1,
            message2,
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
            document.getElementById("address").classList.remove("error");
            document.getElementById("postal").classList.remove("error");
            document.getElementById("city").classList.remove("error");
            document.getElementById("email").classList.remove("error");
            document.getElementById("tel").classList.remove("error");
            document.getElementById("message1").classList.remove("error");
            document.getElementById("message2").classList.remove("error");
            setLastName("");
            setFirstName("");
            setAddress("");
            setPostal("");
            setCity("");
            setEmail("");
            setTel("");
            setMessage1("");
            setMessage2("");

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
      if (!message1) {
        messageS1.classList.add("error");
      }
      if (!message2) {
        messageS2.classList.add("error");
      }
    }
  };

 

  return (
    <form className="contact-form devis" >
    <h3>Demandez votre devis !!</h3>
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
      <input
        type="text"
        id="address"
        name="address"
        required
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Votre adresse *"
        value={address}
      />
      <input
        type="text"
        id="postal"
        name="postal"
        required
        onChange={(e) => setPostal(e.target.value)}
        placeholder="Votre code postal *"
        value={postal}
      />
      <input
        type="text"
        id="city"
        name="city"
        required
        onChange={(e) => setCity(e.target.value)}
        placeholder="Votre ville *"
        value={city}
      />
      <input
        type="tel"
        id="tel"
        name="tel"
        required
        onChange={(e) => setTel(e.target.value)}
        placeholder="Votre téléphone *"
        value={tel}
      />
      <textarea
        id="message1"
        name="message1"
        onChange={(e) => setMessage1(e.target.value)}
        placeholder="Votre demande de devis - Avez vous déjà une société de nettoyage ? - Si oui, à quelle fréquence de passage ? *"
        value={message1}
        required
      />
       <textarea
        id="message2"
        name="message2"
        onChange={(e) => setMessage2(e.target.value)}
        placeholder="Superficie - Nature des Sols - Nombre de Sanitaires - Temps estimer de passage de(s) agent(s) d'entretien *"
        value={message2}
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

export default DevisForm;
