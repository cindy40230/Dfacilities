import React, { useEffect } from "react";
import NettoyageCourant from "../assets/images/prestation-courant.jpg";
import Bureau from "../assets/images/entretienbureau.jpg";
import Bureau2 from "../assets/images/entretienCourant2.jpg";
import Vitre from "../assets/images/vitres.jpg";
import FinDeChantier from "../assets/images/findechantier.jpg";
import Panneau from "../assets/images/nettoyage-panneauxsolaires.jpeg";
import Panneau1 from "../assets/images/panneau_soleil.png";
import Panneau2 from "../assets/images/panneaux-solaires.jpg";
import Desinfection from "../assets/images/desinfectionCovid.jpg";
import Chantier1 from "../assets/images/chantier1.jpg";
import Chantier2 from "../assets/images/chantier2.jpg";
import Vitre1 from "../assets/images/vitres1.jpg";
import Vitre2 from "../assets/images/vitre2.jpg";
import Covid1 from "../assets/images/coronavirus-Covid.jpg";
import Covid2 from "../assets/images/covid2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

export const NosPrestations = () => {
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
            <h1>Nos Prestations</h1>
            <p>& Services associés</p>
          </div>
          <div className="a-propos-text-content flex presta">
            <article className="card_prestation" data-aos="fade-right">
              <header className="card_prestation__thumb">              
                  <img src={NettoyageCourant} alt=" representant le nettoyge courant" />               
              </header>
              <div className="card_prestation__body">
              <NavLink  to="/entretien-courant" title="lien vers la page du nettoyage courant">
                <h2 className="card_prestation__title">
                  Entretien Courant
                </h2>
                <div className="card_prestation__subtitle">
                  Nettoyage régulier de vos locaux professionels et parties
                  communes
                </div>
                </NavLink>
                <p className="card_pestation__description">
                  Nous assurons le nettoyage de tout type de locaux, les
                  immeubles de bureaux, les copropriétés, les cabinets médicaux
                  où juridiques, les pharmacies, les concessionnaires, les
                  entreprises publiques ...
                </p>
              </div>
            </article>
            <article className="card_prestation" data-aos="fade-left">
              <header className="card_prestation__thumb">
               
                <img src={FinDeChantier} alt="represente une fin de chantier" />
                
              </header>
              <div className="card_prestation__body">
              <NavLink  to="/remise-en-etat" title="lien vers la page de la remise en état">
                <h2 className="card_prestation__title">
                  Remise en état
                </h2>
                <div className="card_prestation__subtitle">
                  Un travail minutieux pour les Professionnels et Particuliers.
                </div>
                </NavLink>
                <p className="card_pestation__description">
                  Notre équipe intervient pour un nettoyage de fin de chantier
                  après des travaux de construction ou de rénovation. Nous vous
                  assurons des locaux sains et propres après notre intervention.{" "}
                </p>
              </div>
            </article>
            <article className="card_prestation" data-aos="fade-right">
              <header className="card_prestation__thumb">
               
                <img src={Vitre} alt="représente le nettoyage de la vitrerie" />
                
              </header>
              <div className="card_prestation__body">
              <NavLink  to="/nettoyage-de-vitre" title="lien vers la page sur le nettoyage de vitre">
                <h2 className="card_prestation__title">
                La vitrerie
                </h2>
                <div className="card_prestation__subtitle">
                  SPÉCIALISTE du nettoyage de vitres – Professionnel et
                  Particulier
                </div>
                </NavLink>
                <p className="card_pestation__description">
                  Nous vous proposons des prestations spécifiques pour le
                  nettoyage de vitrerie.Nous intervenons en toute discrétion
                  dans vos locaux et adaptons nos horaires de travail à votre
                  convenance.
                </p>
              </div>
            </article>
            <article className="card_prestation" data-aos="fade-right">
              <header className="card_prestation__thumb">
               
                <img src={Panneau} alt="représente le nettoyage de la vitrerie" />
                
              </header>
              <div className="card_prestation__body">
              <NavLink  to="nettoyage-de-panneau" title="lien vers la page sur le nettoyage de vitre">
                <h2 className="card_prestation__title">
                Le nettoyage des panneaux solaires
                </h2>
                <div className="card_prestation__subtitle">
                Pourquoi le nettoyage des panneaux photovoltaique ?
                </div>
                </NavLink>
                <p className="card_pestation__description">
                Contrairement aux idées reçues, la pluie ne suffit pas à nettoyer les panneaux photovoltaïques. Une action mécanique par brossage est indispensable pour garder un rendement optimal.
                </p>
              </div>
            </article>
            <article className="card_prestation" data-aos="fade-left">
              <header className="card_prestation__thumb">
               
                <img src={Desinfection} alt=" represente la désinction covid 19" />
              
              </header>
              <div className="card_prestation__body">
              <NavLink  to="/desinfection" title="lien vers la page de la désinfection covid19">
                <h2 className="card_prestation__title">
                  Désinfection COVID-19
                </h2>
                <div className="card_prestation__subtitle">
                  La désinfection des locaux contre le COVID-19
                </div>
                </NavLink>
                <p className="card_pestation__description">
                  Afin de garantir la sécurité de toute personne autour de vous,
                  notre équipe de nettoyeurs COVID-19 utilise les meilleurs
                  produits pour désinfecter et nettoyer les locaux des virus et
                  des infections bactériennes.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
   </main>

    </>
  );
};

export const EntretienCourant = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
     <main>    
          <div className="entretien">
            <div className="entretien_header"></div>
            <div className="entretien_body">
              <h2>L'entretien courant</h2>
              <div className="entretien_body_content1">
                <p data-aos="fade-right">
                  Vous recherchez une entreprise local de nettoyage entretenir 
                  votre{" "}
                  <span>
                    bureau, commerce, hôtel, entrepôt, grande surface ou
                    restaurant
                  </span>{" "}
                  ? D-Facilities fournit des services de nettoyage
                  pour les locaux sur une base quotidienne, hebdomadaire, ou
                  mensuelle. <br /> <br /> Pour les entreprises, les bureaux et
                  autres structures, <span>l’entretien</span> régulier de vos
                  locaux favorise le confort et le bien-être de vos collaborateurs mais aussi de vos clients.En tant que spécialiste du nettoyage, nous nous attachons à fournir des prestations d’une grande qualité. <br />
                  <br /> Nous devons également respecter
                  <span> des normes d’hygiène</span> , de sécurité, de procéder
                  à des passages réguliers et planifiés. Forts de notre
                  expérience, nous proposons des services de nettoyage de haute
                  qualité axés sur le détail, pour des espaces plus propres et
                  sains. Contactez-nous pour de plus amples renseignements, ou
                  demandez votre devis gratuit.
                </p>
                <img src={Bureau} alt="representant un pièce courant pour le nettoyage courant" data-aos="fade-left" />
              </div>

              <NavLink to="/devis" exact className="hover btn" title="lien vers la page de demande de devis" >
            Demander votre devis!
            </NavLink>

              <div className="entretien_body_content2">
                <h3>
                  Pour un environnement de travail propre et bien entretenu
                </h3>
                <div className="entretien_body_content_text">
                  <img src={Bureau2} alt="représente un grand hall " data-aos="fade-down-right" />
                  <p data-aos="fade-up-left">
                    Votre local est le visage de votre entreprise. Pour une
                    bonne impression, il est donc préférable de veiller à ce que
                    vos locaux soient toujours organisés et bien entretenus.{" "}
                    <br /> <br /> Mettez en valeur votre entreprise en
                    choisissant un programme de nettoyage flexible et
                    personnalisé, spécialement conçu pour les professionnels.{" "}
                    <br />
                    <br /> Pour répondre à vos besoins, nous prenons le temps
                    d’écouter et de comprendre vos envies, afin d’identifier où
                    nous pouvons vous être plus utiles ! 
                  </p>
                </div>
              </div>
            </div>
            <div className="entretien_footer"></div>
          </div>
      </main>
   

    </>
  );
};
export const RemiseEnEtat = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
  
     <main>
          <div className="entretien">
            <div className="entretien_header_enEtat"></div>
            <div className="entretien_body">
              <h2>Remise en état après fin de chantier Nouvelle-Aquitaine</h2>
              <div className="entretien_body_content1" data-aos="fade-right">
                <p>
                Après avoir déployé tant d’efforts pour construire ou rénover votre maison ou votre local professionnel,  il est recommandé de contacter une entreprise de  nettoyage afin d’effectuer une remise en état. <br />
                Une rénovation de maison ou d’appartement, un déménagement ou différents types travaux et de réparations intérieures ? D-Facilities s’occupera du nettoyage complet de votre chantier. 
                  <br /> Notre expérience en nettoyage de fin de chantier, nous
                  permet d’intervenir en tant que spécialistes dans toute la
                  région <span>Nouvelle-Aquitaine</span> , pour répondre à vos
                  besoins et vous fournir des prestations soignées. <br />{" "}
                  <br /> Notre équipe est spécialement formée pour
                  réaliser ces travaux de nettoyage intensifs,afin de garantir une remise en état de qualité pour un environnement propre et sans poussière.<br />
                  <br /> Nous opérons après que les entrepreneurs aient achevés
                  leurs travaux ou une fois votre déménagement terminé. <br />
                  <br /> Nous disposons de machines de dernières technologies, mais aussi d’une gamme de produits dont l’efficacité n’est plus à prouver.  <br /> Pour plus de détails sur nos
                  interventions, contactez notre équipe.
                </p>
                <img src={Chantier1} alt="represente un chantier pour la remise en etat" data-aos="fade-left" />
              </div>

              <NavLink to="/devis" exact className="hover btn" title="lien vers la page de demande de devis" >
            Demander votre devis!
            </NavLink>

              <div className="entretien_body_content2">
                <h3>
                  Nous réalisons le nettoyage après fin de vos travaux de
                  rénovation
                </h3>
                <div className="entretien_body_content_text">
                  <img src={Chantier2} alt="représente un sol remis en état" data-aos="fade-up-right" />
                  <p data-aos="fade-down-left">
                    Vous venez de terminer vos travaux de rénovation ? Vous
                    n’avez pas de temps de nettoyer votre chantier ? Nous
                    nous occupons de tous ! <br /> <br /> Nous procédons à
                    un nettoyage intensif et clé-en-main en fin de chantier pour
                    mettre en valeur les travaux effectués. <br /> <br /> Nous
                    intervenons dans les délais, et vous proposons des solutions
                    de nettoyage fiables et efficaces et sans danger.
                  </p>
                </div>
              </div>
            </div>
            <div className="entretien_footer_enEtat"></div>
         
      </div>
      </main>
    
    </>
  );
};

export const NettoyageVitres = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
  
     <main>
          <div className="entretien">
            <div className="entretien_header_vitre"></div>
            <div className="entretien_body">
              <h2>Nettoyage de vitres en Nouvelle-Aquitaine</h2>
              <div className="entretien_body_content1">
                <p data-aos="fade-right">
                  Le soucis du détail!
                 <br />
                 Lors d'une intervention d'entretien de la vitrerie, le soucis du détail est d'une importance primordiale !<br/>
                 Encadrements, joints, vasistas, vérification des traces, essuyage des volets ou stores...
                  <br /><br />La façade de votre bâtiment est le premier aperçu de votre entreprise.
Tout comme vos locaux elle se doit d’être propre et entretenue.
 <br /> 
                  <br />
                  Profitez de nos différents services de nettoyage pour cumuler
                  toutes les prestations que vous souhaitez avec une seule et
                  même entreprise.
                  <br/><br />
                  Nous disposons de moyen écologiques et ergonomiques, de dernière génération, afin de garantir un résultat de qualité, mais aussi la sécurité de nos collaborateurs intervenants. 
                </p>
                <img src={Vitre2} alt="représente un nettoyage de vitre en hauteur" />
              </div>

              <NavLink to="/devis" exact className="hover btn" title="lien vers la page de demande de devis" >
            Demander votre devis!
            </NavLink>

              <div className="entretien_body_content2">
                <h3>
                  SPÉCIALISTE DU NETTOYAGE DE VITRES – Professionnel et
                  Particulier
                </h3>
                <div className="entretien_body_content_text">
                  <img src={Vitre1} alt="représente un nettoyage de vitre en hauteur en nacelle" data-aos="zoom-in" />
                  <p data-aos="fade-down-left">
                    Nous vous proposons des prestations spécifiques pour le
                    nettoyage de votre vitrerie extérieures et intérieures, de
                    tout type d’immeuble. <br />
                    Nous intervenons en toute discrétion dans vos locaux et
                    adaptons nos horaires de travail à votre convenance. <br />{" "}
                    Nous aspirons à être dignes de votre confiance et à garantir
                    une intervention rapide et efficace. <br /><br />
                    La sécurité étant essentielle, nos employés prennent toutes
                    les précautions nécessaires à la sécurisation des travaux.
                    <br /> Pour les nettoyages en hauteur, il est essentiel de faire
                    appel à des <span>professionnels reconnus</span> , qui
                    emploient un personnel formé et compétent..
                  </p>
                </div>
              </div>
            </div>
            <div className="entretien_footer_vitre"></div>
          </div>
          </main>
 
    </>
  );
};


export const NettoyagePanneau = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
  
     <main>
          <div className="entretien">
            <div className="entretien_header_panneau"></div>
            <div className="entretien_body">
              <h2>Nettoyage de panneau photovoltaique</h2>
              <div className="entretien_body_content1">
                <p data-aos="fade-right">
                La technique et l’expérience !
                 <br />
                 Nous nettoyons aussi les panneaux photovoltaïques pour garantir une meilleure efficacité et donc rentabilité.Dans une période de crise énergétique, il est essentiel de pouvoir tirer profit à 100% de son installation. <br/> <br/>
                 Nous disposont du matériel adéquat, des techniques et les produits nécessaires pour livrer des travaux de la meilleure qualité dans les meilleurs délais..
                  <br />
                </p>
                <img src={Panneau2} alt="représente un nettoyage de panneau solaire" />
              </div>

              <NavLink to="/devis" exact className="hover btn" title="lien vers la page de demande de devis" >
            Demander votre devis!
            </NavLink>

              <div className="entretien_body_content2">
                <h3>
                  SPÉCIALISTE DU NETTOYAGE DES PANNEAUX PHOTOVOLTAIQUE – Professionnel et
                  Particulier
                </h3>
                <div className="entretien_body_content_text">
                  <img src={Panneau1} alt="représente un nettoyage de vitre en hauteur en nacelle" data-aos="zoom-in" />
                  <p data-aos="fade-down-left">
                  Nous disposons d’une technologie unique. Un système H2O, un système permettant de créer une eau pure. L’eau pure étant le plus puissant des détergent, tout cela dans un respect écologique. 
Notre système autonome, muni de brosses spécifiques pour vos panneaux, d’une perche en carbone de plus de 9m, vous garanti un résultat exceptionnel. 
 <br />{" "}
 N’hésitez pas à nous contacter, afin que nous puissions vous accompagner.
 <br /><br />
 Notre partenaire : <a href="https://www.ats-photovoltaique.com/accueil-1">ATSE Photovoltaïque </a> , pourra le cas échéant, vous accompagner sur vos futurs projets photovoltaïques.  
                  </p>
                </div>
              </div>
            </div>
            <div className="entretien_footer_panneau"></div>
          </div>
          </main>
 
    </>
  );
};

export const DesinfectionCovid = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>

     <main>
          <div className="entretien">
            <div className="entretien_header_covid"></div>
            <div className="entretien_body">
              <h2>
                La désinfection des locaux contre le COVID-19 Nouvelle-Aquitaine
              </h2>
              <div className="entretien_body_content1">
                <p data-aos="fade-right">
                Afin de garantir la sécurité de toute personne autour de vous, notre équipe de spécialistes dans la désinfection du <span>COVID-19</span> utilise les
                  meilleurs produits pour désinfecter et nettoyer les locaux des
                  virus et des infections bactériennes. <br /> Situés à
                  Saint-Geour-de-Maremne dans les Landes, nous intervenons sur
                  tous types de propriétés, de maisons et de bâtiments, et
                  employons des produits spécifiques à la désinfection répondant
                  aux normes NF-14476. <br /> Nous réagissons régulièrement aux
                  demandes de nos clients, et restons à leur entière disposition
                  pour la désinfection de bureaux, salles de réunions, parties
                  communes… . Pour toute demande de renseignement, contactez
                  notre équipe.
                </p>
                <img src={Covid2} alt="represente un virus" />
              </div>

              <NavLink to="/devis" exact className="hover btn" title="lien vers la page de demande de devis" >
            Demander votre devis!
            </NavLink>

              <div className="entretien_body_content2">
                <h3>
                  Une entreprise spécialisée dans la désinfection des surfaces
                  et des locaux
                </h3>
                <div className="entretien_body_content_text">
                  <img src={Covid1} alt="represente un virus" data-aos="zoom-in" />
                  <p data-aos="fade-down-left">
                    Tournez-vous vers votre entreprise <span>D-FACILITIES</span>{" "}
                    , une entreprise de confiance qui vous fournit des solutions
                    sur mesure, de nettoyage proactif et de désinfection des
                    locaux. <br />
                    <br /> Dès l’apparition du <span> COVID-19</span>, nous
                    avons engagé les consommables et équipements les plus
                    innovants. Nous nettoyons les sols, les surfaces, les
                    équipements, les machines, les meubles et l’électroménager
                    pour lutter contre la propagation du virus et des maladies.{" "}
                    <br /><br />
                    Nos spécialistes suivent un processus rigoureux lorsqu’ils
                    effectuent un nettoyage COVID-19 pour s’assurer que la
                    contamination est contenue et que les virus sont exterminés
                    pour un résultat sûr et sans danger.
                  </p>
                </div>
              </div>
            </div>
            <div className="entretien_footer_covid"></div>
          </div>
          </main>
  
    </>
  );
};
