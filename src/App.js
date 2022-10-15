import React from 'react';
import{BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import {NosDomaine, NosPartenaires, QuiSommeNous } from './pages/Apropos';
import Contact from './pages/Contact';
import Devis from './pages/Devis';
import Home from './pages/Home';
import { Actualite, News, NosOffresEmploi } from './pages/Actualite';
import { DesinfectionCovid, EntretienCourant, NettoyageVitres, NosPrestations, RemiseEnEtat,NettoyagePanneau } from './pages/NosPrestations';
import Article from './pages/Article';
import Error404 from './composants/Error404';
import Header from "../src/composants/Header";
import Footer from "../src/composants/Footer";
import { Mentions } from './pages/Mentions';
import Offre from './pages/Offre';


function App() {
  return (
    <>
    
    <Router basename = {process.env.PUBLIC_URL}>
    <div className="site">
    <Header/> 
    <Switch>
      <Route exact path="/" component={Home}/>     
      <Route exact path="/qui-sommes-nous" component={QuiSommeNous}/>
      <Route exact path="/nos-domaines" component={NosDomaine}/>
      <Route exact path="/nos-partenaires" component={NosPartenaires}/>
      <Route exact path="/nos-prestations" component={NosPrestations}/>
      <Route exact path="/entretien-courant" component={EntretienCourant}/>
      <Route exact path="/remise-en-etat" component={RemiseEnEtat}/>
      <Route exact path="/nettoyage-de-vitre" component={NettoyageVitres}/>
      <Route exact path="/nettoyage-de-panneau" component={NettoyagePanneau}/>
      <Route exact path="/desinfection" component={DesinfectionCovid}/>
      <Route exact path="/actualite" component={Actualite}/>
      <Route exact path="/news" component={News}/>
      <Route path="/news/:slug" exact component={Article}/>   
      <Route exact path="/nos-offres-emplois" component={NosOffresEmploi}/>
      <Route path="/nos-offres-emplois/:slug" exact component={Offre}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/mentions" component={Mentions}/>
      <Route exact path="/devis" component={Devis}/>
      <Route render={()=> <Error404 type='404'>La page n'existe pas</Error404>}/>      
      <Redirect to="/"/>
    </Switch>
    <div className='minSite'></div>
    </div>
    <Footer/>
    </Router>
   
  
   </>
  );
}

export default App;
