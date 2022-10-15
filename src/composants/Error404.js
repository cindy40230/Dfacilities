import React from 'react';


export default function Error404(props) {
  return (
    < >

<main>
        <div className="a-propos">
          <div className="a-propos-main">
            <div className="a-propos-content">
              <h1>Erreur {props.type}</h1>
              <div>
              <p>
              {props.children}
              </p>
              </div>
              <div>
              <a className="btn" href="/" title="retour à l'accueil du site d-facilities">revenir a l 'accueil</a>
              </div>
             
            </div>
          </div>
        </div>
</main>
    
    </>
  )
}