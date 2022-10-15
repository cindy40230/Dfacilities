import React, {useState}from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../assets/images/LogoOFFICIEL1.svg';
export default function Navigation() {
   
 const[toggleMenu,setToggleMenu]=useState(false);

const toggleNav=()=>{
  setToggleMenu (()=>{ 
 let x= document.getElementById('navbar');
  if(x.className === "nav"){
    x.className+= " responsive";
  }else{
    x.className="nav";
  }
})}
 

  return (

    <>
   <NavLink to="/" exact className="hover" activeClassName="nav-active" >
     <img className="logo" src={Logo} alt="logo" /> 
    </NavLink>
    <nav id="navbar" class="nav">
    <div className="dropdown-1">
      <NavLink to="/" exact className="accueil" activeClassName="nav-active">
      <button className="button">Accueil</button>
      </NavLink>
      </div>
    <div className="dropdown-1">
      <NavLink to="/qui-sommes-nous" exact className="hover" activeClassName="nav-active">
      <button className="button">Qui sommes Nous?</button>
      </NavLink>
      <div className="content">      
        <NavLink to="/nos-domaines" exact className="hover" activeClassName="nav-active">
        Nos domaine d'activité
        </NavLink>
        <NavLink to="/nos-partenaires" exact className="hover" activeClassName="nav-active">
        Nos partenaires
        </NavLink>
      </div>
    </div>
    <div className="dropdown-1">
      <NavLink to="/nos-prestations" exact className="hover" activeClassName="nav-active">
      <button className="button">Nos prestations</button>
      </NavLink>
      <div className="content">
      <NavLink to="/entretien-courant" exact className="hover" activeClassName="nav-active">
       Entretien Courant
        </NavLink>
        <NavLink to="/remise-en-etat" exact className="hover" activeClassName="nav-active">
        Remise en états
        </NavLink>
        <NavLink to="/nettoyage-de-vitre" exact className="hover" activeClassName="nav-active">
       Nettoyage de vitres
        </NavLink>
        <NavLink to="/desinfection" exact className="hover" activeClassName="nav-active">
        Désinfection Covid-19
        </NavLink>
      </div>
      </div>
      <div className="dropdown-1">
      <NavLink to="/actualite" exact className="hover" activeClassName="nav-active">
      <button className="button">Actualités</button>
      </NavLink>
      <div class="content">
      <NavLink to="/news" exact className="hover" activeClassName="nav-active">
       News
        </NavLink>
        <NavLink to="/nos-offres-emplois" exact className="hover" activeClassName="nav-active">
       Nos offres d'emplois
        </NavLink>      
      </div>
      </div>        
    <div className="dropdown-1">
    <NavLink to="/" exact className="desactived" activeClassName="nav-active">
      <button className="button">Mon compte</button>
      </NavLink>
      <div className="content">
      <a href="http://www.wonett70.com/dfacilities/clients/index.php" className="hover" activeClassName="nav-active" target="_blank"  rel="noreferrer">
      Compte client
       </a>
        <a href="http://www.wonett70.com/dfacilities/salaries/index.php" className="hover" activeClassName="nav-active" target="_blank"  rel="noreferrer" >
       Compte salarié
        </a> 
         <a href="http://localhost/serveurd_facilities/back/login" className="hover" activeClassName="nav-active" target="_blank"  rel="noreferrer" > 
         {/* <a href="https://cindy-ruet.fr/dfacilities/serveurd_facilities/back/login" className="hover" activeClassName="nav-active" target="_blank"  rel="noreferrer" > */}
       Administrateur
        </a>     
      </div>
      </div>  
      <div className="dropdown-1">
      <NavLink to="/contact" exact className="hover" activeClassName="nav-active">
      <button className="button">Contact</button>
      </NavLink>
      </div>     
 
    
    <button onClick={toggleNav} className="btnResponsive">
      &#9776; </button>
      
    
       
</nav>  

</>
   
  )
}
