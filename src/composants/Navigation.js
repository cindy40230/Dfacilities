
import { NavLink } from "react-router-dom";
import Logo from '../assets/images/LogoOFFICIEL1.svg';
export default function Navigation() {


  
 
  return (

    <header id="header">
    <input type="checkbox" name="burger" id="burger"/>
      <label for="burger" id="menu-burger">
        <span className="bar1"></span>
        <span className="bar2"></span>
        <span className="bar3"></span>
      </label>
  <nav>
    <div className="logo">
      <NavLink to="/" exact title="lien vers la page d'accueil du site">
      <img class="logo_img" src={Logo}alt=""/>
      </NavLink> 
    </div>    
    <ul>     
      <li>
        <label for="btn-1" className="show">Qui sommes nous ? +</label>
        <NavLink to="/qui-sommes-nous" exact title="lien vers la page d'accueil qui sommes nous">Qui sommes nous ?</NavLink>
        <input type="checkbox" id="btn-1"/>
        <ul>
          <li>
          <NavLink to="/nos-domaines" exact title="lien vers la page domaine d'activité"> Nos domaine d'activité</NavLink>
          </li>
          <li>
          <NavLink to="/nos-partenaires" exact title="lien vers la page nos partenaires"> Nos partenaires</NavLink>
          </li>
        </ul>  
        </li>   
      <li>
        <label for="btn-2" class="show">Nos prestations +</label>
        <NavLink to="/nos-prestations" exact title="lien vers la page accueil des prestations">Nos prestations</NavLink>
        <input type="checkbox" id="btn-2"/>
        <ul>
          <li><NavLink to="/entretien-courant" exact title="lien vers la page entretien courant"> Entretien Courant</NavLink></li>
          <li><NavLink to="/remise-en-etat" exact title="lien vers la page remise en etats">Remise en états</NavLink></li>
          <li><NavLink to="/nettoyage-de-vitre" exact title="lien vers la page nettoyage de vitres">Nettoyage de vitres</NavLink></li>
          <li><NavLink to="/nettoyage-de-panneau" exact title="lien vers la page nettoyage panneau photovoltaique">Nettoyage panneau photovoltaique</NavLink></li>
          <li><NavLink to="/desinfection" exact title="lien vers la page désinction covid">Désinfection Covid-19</NavLink></li>
        </ul>
      </li>
      <li>
        <label for="btn-3" class="show">Actualité +</label>
        <NavLink to="/actualite" exact title="lien vers la page d'accueil actualité">Actualité</NavLink>
        <input type="checkbox" id="btn-3"/>
        <ul >
          <li><NavLink to="/news" exact title="lien vers la page des news">News</NavLink></li>
          <li><NavLink to="/nos-offres-emplois" exact title="lien vers la page des offres d'emplois"> Nos offres d'emplois</NavLink></li>
        </ul>
        </li>
      
      <li>
        <label for="btn-4" class="show">Mon compte +</label>
        <NavLink to="/" exact>Mon compte</NavLink>
        <input type="checkbox" id="btn-4"/>
        <ul >
          <li>
            <a href="http://www.wonett70.com/dfacilities/clients/index.php" className="hover" activeClassName="nav-active" target="_blank"  rel="noreferrer" title="lien vers l'accueil clients">Compte client</a>
          </li>
          <li>
            <a href="http://www.wonett70.com/dfacilities/salaries/index.php" className="hover" activeClassName="nav-active" target="_blank"  rel="noreferrer" title="lien vers l'accueil salarié">Compte salarié</a> 
          </li>
          <li>
          <a href="http://localhost/serveurd_facilities/back/login" className="hover" activeClassName="nav-active" target="_blank"  rel="noreferrer" title="lien vers l'accueil administration" > 
         {/* <a href="https://cindy-ruet.fr/dfacilities/serveurd_facilities/back/login" className="hover" activeClassName="nav-active" target="_blank"  rel="noreferrer" > */}Administrateur</a>   
          </li>
        </ul>
        </li>   
      <li>
      <NavLink to="/contact" exact title="lien vers la page contact">Contact</NavLink>
      </li>
    </ul>
  </nav> 
  </header> 
  )
}