
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
      <NavLink to="/" exact >
      <img class="logo_img" src={Logo}alt=""/>
      </NavLink> 
    </div>    
    <ul>     
      <li>
        <label for="btn-1" className="show">Qui sommes nous ? +</label>
        <NavLink to="/qui-sommes-nous" exact>Qui sommes nous ?</NavLink>
        <input type="checkbox" id="btn-1"/>
        <ul>
          <li>
          <NavLink to="/nos-domaines" exact> Nos domaine d'activité</NavLink>
          </li>
          <li>
          <NavLink to="/nos-partenaires" exact> Nos partenaires</NavLink>
          </li>
        </ul>  
        </li>   
      <li>
        <label for="btn-2" class="show">Nos prestations +</label>
        <NavLink to="/nos-prestations" exact>Nos prestations</NavLink>
        <input type="checkbox" id="btn-2"/>
        <ul>
          <li><NavLink to="/entretien-courant" exact> Entretien Courant</NavLink></li>
          <li><NavLink to="/remise-en-etat" exact >Remise en états</NavLink></li>
          <li><NavLink to="/nettoyage-de-vitre" exact>Nettoyage de vitres</NavLink></li>
          <li><NavLink to="/nettoyage-de-panneau" exact>Nettoyage panneau photovoltaique</NavLink></li>
          <li><NavLink to="/desinfection" exact>Désinfection Covid-19</NavLink></li>
        </ul>
      </li>
      <li>
        <label for="btn-3" class="show">Actualité +</label>
        <NavLink to="/actualite" exact >Actualité</NavLink>
        <input type="checkbox" id="btn-3"/>
        <ul >
          <li><NavLink to="/news" exact >News</NavLink></li>
          <li><NavLink to="/nos-offres-emplois" exact > Nos offres d'emplois</NavLink></li>
        </ul>
        </li>
      
      <li>
        <label for="btn-4" class="show">Mon compte +</label>
        <NavLink to="/" exact>Mon compte</NavLink>
        <input type="checkbox" id="btn-4"/>
        <ul >
          <li>
            <a href="http://www.wonett70.com/dfacilities/clients/index.php" className="hover" activeClassName="nav-active" target="_blank"  rel="noreferrer">Compte client</a>
          </li>
          <li>
            <a href="http://www.wonett70.com/dfacilities/salaries/index.php" className="hover" activeClassName="nav-active" target="_blank"  rel="noreferrer" >Compte salarié</a> 
          </li>
          <li>
          <a href="http://localhost/serveurd_facilities/back/login" className="hover" activeClassName="nav-active" target="_blank"  rel="noreferrer" > 
         {/* <a href="https://cindy-ruet.fr/dfacilities/serveurd_facilities/back/login" className="hover" activeClassName="nav-active" target="_blank"  rel="noreferrer" > */}Administrateur</a>   
          </li>
        </ul>
        </li>   
      <li>
      <NavLink to="/contact" exact>Contact</NavLink>
      </li>
    </ul>
  </nav> 
  </header> 
  )
}