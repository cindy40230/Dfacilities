import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export const Mentions = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <main>
        <div className="a-propos">
          <div className="a-propos-main">
            <div className="a-propos-content">
              <h1>Mentions Légales</h1>
              <p>et vie privée</p>
            </div>
            <div className="a-propos-text-content" data-aos="zoom-in-left">
              <p>
                1 – Informations légales <br />
                Ce site est édité par : Nom ou Raison sociale: D-facilities
                (entreprise de nettoyage et de propreté)
                <br /> N° SIRET:88844124300019 rcs DAX
                <br /> Adresse: 45b rue de la forêt
                <br /> Code postal: 40230
                <br /> Ville: Saint Geours de Maremne
                <br /> Téléphone: 05.58.43.46.84
                <br /> Téléphone port: 06.45.93.74.20
                <br /> Adresse électronique: contact@dfacilities.fr
                <br /> Directeur de la rédaction et de publication D-facilities
                (entreprise de nettoyage et de propreté) Mr David SOURIGUES{" "}
                <br />
                Il a été créé par : Cindy Ruet N° SIRET:90916053300016 rcs DAX
                <br />
                L'hébergement est assuré par xxxxxxxxxxxxx.
                <br />
                <br />
                Adresse de l' hébergeur: {" "}
              </p>

              <p>
                2 – Données personnelles <br />
                Conformément à la loi Informatique et Libertés du 6 Janvier 1978
                modifiée par la Loi du 6 août 2004, vous disposez d’un droit
                d’accès, de rectification, de modification et de suppression des
                données personnelles que vous nous avez communiquées. Vous
                pouvez exercer ce droit en envoyant un courrier au Responsable
                du traitement (destiné à la gestion du jeu et à l’enrichissement
                du fichier clients et prospects) : D-facilities Propreté &
                Services Associés 4 route du Lavoir - Lot 5 40230 Saint Geours
                de Maremne Si vous êtes abonné à des services d’information par
                courrier électronique (« newsletter »), vous pouvez demander à
                ne plus recevoir ces courriers soit comme indiqué ci-dessus,
                soit en suivant les instructions figurant en fin de chacun de
                ces courriers, lorsque vous les recevez. Dans le cadre du
                Règlement général sur la protection des données (RGPD) et dans
                le cadre de notre engagement à la transparence, l’utilisation
                des données personnelles au sein de notre Groupe est détaillée
                dans notre politique de confidentialité. Celle-ci présente le
                type de données collectées, le cadre dans lequel ces dernières
                sont utilisées, leurs destinataires, leur lieu de stockage, les
                droits des clients et comment les exercer. Si le client a des
                questions concernant notre politique de confidentialité, il peut
                contacter notre Délégué à la protection des données par courrier
                à l’adresse précédemment citée ou par mail à l’adresse suivante
                : contact@dfacilities.fr
              </p>
              <p>
                3 – Cookies Ce site est susceptible d’enregistrer des cookies
                sur votre navigateur (pour l’affichage du site, la mesure
                d’audience, les connexions aux réseaux sociaux). En poursuivant
                votre navigation sur notre site, vous acceptez l’utilisation de
                ces derniers. Vous pouvez toutefois vous opposer au dépôt des
                cookies en configurant les paramètres de votre navigateur via
                les procédures suivantes : FireFox Allez dans l’onglet « Outils
                » du navigateur puis sélectionnez le menu « Options ». Dans la
                fenêtre qui s’affiche, sélectionnez la rubrique « Vie privée »
                et cliquez sur « Affichez les cookies ». Repérez les cookies
                souhaités, sélectionnez-les et supprimez-les. Google Chrome
                Cliquez sur l’icône du menu « Outils ». Sélectionnez « Options
                ». Cliquez sur l’onglet « Options avancées » et accédez à la
                section « Confidentialité ». Cliquez sur le bouton « Afficher
                les cookies ». Repérez les cookies souhaités, sélectionnez-les
                et supprimez-les. Microsoft Internet Explorer Dans Internet
                Explorer, cliquez sur le bouton « Outils », puis sur « Options
                Internet ». Sous l’onglet Général, sous « Historique de
                navigation », cliquez sur « Paramètres ». Cliquez sur le bouton
                « Afficher les fichiers ». Cliquez sur l’en-tête de colonne «
                Nom » pour trier tous les fichiers dans l’ordre alphabétique,
                puis parcourez la liste jusqu’à ce que vous voyiez des fichiers
                commençant par le préfixe « Cookie ». Repérez les cookies
                souhaités et supprimez-les. Safari Dans voter navigateur,
                choisissez le menu « Édition » puis « Préférences ». Cliquez sur
                « Sécurité ». Cliquez sur « Afficher les cookies ». Repérez les
                cookies souhaités et cliquez sur « Effacer ».
                <br />
              </p>
              <p>
                4 – Propriété Intellectuelle L’accès au site
                https://www.dfacilities.fr vous confère un droit d’usage privé
                et non exclusif de ce site. Tous les articles, photographies et
                autres documents présentés sur ce site sont la propriété de
                D-facilities, ou sont reproduits avec l’autorisation de leurs
                propriétaires, et sont soumis au droit d’auteur et autres droits
                de propriété intellectuelle ou industrielle. L’utilisation
                frauduleuse de tout contenu du site Internet est totalement
                interdite. D-facilities vous informe qu’elle usera largement de
                ses droits de propriété intellectuelle pour engager des
                poursuites, même pénale, si nécessaire.
              </p>
              <p>
                5 – Indisponibilité du site D-facilities s’engage à faire ses
                meilleurs efforts pour assurer aux utilisateurs une
                accessibilité du site à tout moment. D-facilities ne pourra être tenue
                pour responsable, en cas d’indisponibilité du site, pour quelque
                cause que ce soit.
              </p>
              <p>
                6 – Contact <br />
                Pour nous contacter par mail : contact@dfacilities.fr
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
