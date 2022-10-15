import Card from "../composants/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getArticles } from "../redux/articles/articleReducer";
import { getOffres } from "../redux/offres/offreReducer";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import NewsD from "../assets/images/titre-actualites.jpg";
import Offres from "../assets/images/offres2.jpg";
import Recrutement from "../assets/images/recrutement.png";
// import Articles from "../composants/Articles";
export const Actualite = () => {
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
              <h1>Actualités</h1>
              <p></p>
            </div>
            <div className="a-propos-text-content flex around">
              <article className="card_prestation" data-aos="fade-right">
                <header className="card_prestation__thumb">
                  <img src={NewsD} alt="represente les news" />
                </header>
                <div className="card_prestation__body">
                  <Link to="/News" title="lien vers les articles">
                    <h2 className="card_prestation__title">News</h2>
                    <div className="card_prestation__subtitle">
                      Nettoyage régulier de vos locaux professionels et parties
                      communes
                    </div>
                  </Link>
                  <p className="card_pestation__description">
                    Nous assurons le nettoyage de tout type de locaux, les
                    immeubles de bureaux, les copropriétés, les cabinets
                    médicaux où juridiques, les pharmacies, les
                    concessionnaires, les entreprises publiques ...
                  </p>
                </div>
              </article>
              <article className="card_prestation" data-aos="fade-left">
                <header className="card_prestation__thumb">
                  <img src={Offres} alt="represente les offres" />
                </header>
                <div className="card_prestation__body">
                  <Link
                    to="/nos-offres-emplois"
                    title="liens vers les offres d'emplois"
                  >
                    <h2 className="card_prestation__title">
                      Nos offres d'emplois
                    </h2>
                    <div className="card_prestation__subtitle">
                      Un travail minutieux pour les Professionnels et
                      Particuliers.
                    </div>
                  </Link>
                  <p className="card_pestation__description">
                    Notre équipe intervient pour un nettoyage de fin de chantier
                    après des travaux de construction ou de rénovation. Nous
                    vous assurons des locaux sains et propres après notre
                    intervention.{" "}
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
export const News = () => {
  const { articles } = useSelector((state) => ({
    ...state.articleReducer,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    if (articles.length === 0) {
      dispatch(getArticles());
    }
    // console.log(articles);
  });
  return (
    <>
      <main>
        <div className="a-propos">
          <div className="a-propos-main">
            <div className="a-propos-content">
              <h1>Les News D-facilities</h1>
              <p>Toute l'actualité</p>
            </div>
            <div className="a-propos-text-content articles">
              {articles.map((item) => {
                //console.log(item.article_image1);
                return (
                  <Card key={uuidv4()}>
                    {item.article_image1 !== "" ? (
                      <img
                        src={item.article_image1}
                        alt={item.article_image1}
                      />
                    ) : (
                      <iframe
                        src={item.article_video}
                        className="react-player"
                        title="video"
                        allowfullscreen=""
                        frameborder="0"
                      />
                    )}
                    <div className="article__text">
                      <p className="date">
                        <em>{item.article_createdAt}</em>
                      </p>
                      <hr />
                      <h1>{item.article_title}</h1>
                      <p>{item.article_description.substr(0, 130) + "..."}</p>
                      <Link
                        to={{
                          pathname: `news/${item.article_id
                            .replace(/\s+/g, "-")
                            .trim()}`,
                          state: {
                            id: item.article_id,
                            title: item.article_title,
                            description: item.article_description,
                            date: item.article_createdAt,
                            image1: item.article_image1,
                            image2: item.article_image2,
                            video: item.article_video,
                          },
                        }}
                        className="btn"
                        title="lien permettant de lire l'article complet"
                      >
                        Lire la suite <i className="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export const NosOffresEmploi = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const { offres } = useSelector((state) => ({
    ...state.offreReducer,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    if (offres.length === 0) {
      dispatch(getOffres());
    }
    console.log(offres);
  });

  return (
    <>
      <main>
        <div className="a-propos">
          <div className="a-propos-main">
            <div className="a-propos-content">
              <h1>Nos Offres d'emplois</h1>
              <p>Propreté & services associés</p>
            </div>
            <div className="offres" data-aos="fade-left">
              <div className="header-offre">
                <img src={Recrutement} alt="bandeau recrutement dfacilities" />
              </div>

              <div className="offres-annonces">
                <h2>
                  Les offres d'emploi de <span>D-FACILITIES</span>
                </h2>
                <div className="annonces">
                  {offres.map((item) => {
                    return (
                      <div className="annonce" key={uuidv4()}>                      
                       
                         <div className="annonce-body">
                         <Link
                          to={{
                            pathname: `nos-offres-emplois/${item.offres_id
                              .replace(/\s+/g, "-")
                              .trim()}`,
                            state: {
                              id: item.offres_id,
                              title: item.offres_title,
                              reference: item.offres_reference,
                              description: item.offres_description,
                              lieu: item.offres_lieu,
                              site: item.offres_type_site,
                              typeContrat: item.offres_type_de_contrat,
                              tempsContrat: item.offres_temps_contrat,
                              dureeContrat: item.offres_duree,
                              tempsDeTravail:item.offres_temps_de_travail,
                              nbrHeure:item.offres_nbr_heures,
                              salaire: item.offres_salaire,
                              dateDebut: item.offres_date_debut,
                              date: item.offres_createdAt,
                            },
                          }}
                         
                          title="lien permettant de lire l'annonce complete"
                        >
                          <h2
                          
                            className="annonce-heading"
                          >
                            {item.offres_title} {item.offres_reference}
                          </h2>
                          <p className="annonce-subtext">
                          {item.offres_lieu}
                          </p>
                          <p className="annonce-description">
                           {item.offres_description}
                          </p>               
                          <p className="date">publié le :{new Date(item.offres_createdAt).toLocaleDateString()}</p>
                          </Link>
                        </div>
                      
                        <div className="annonce-right"><p className="contrat"> {item.offres_type_de_contrat} <br /> {item.offres_temps_de_travail} <br /> {item.offres_nbr_heures}</p>
                        </div>
                        
                      </div>
                    );
                  })}
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
