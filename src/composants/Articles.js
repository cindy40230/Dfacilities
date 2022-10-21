
import DataAticle from '../assets/data/dataNews.json';

export default function Articles() {

  return(
    // <ReactPlayer url={articleDetail.video} className="react-player"/>
        DataAticle.map(articleDetail =>{
           
          return(
          <>  
          <div className="article">
            {articleDetail.image !==''?  <img  src={articleDetail.image[0]} alt="" /> :<iframe className="react-player" src={articleDetail.video}
        frameBorder='0'
        allow='autoplay;encrypted-media'
        allowFullScreen
        title='video'
/> }
            <div className="article__text">
                <p className="date">
                  <em>{articleDetail.date}</em>
                </p>
                <hr />
                <h1>{articleDetail.title}</h1>
                <p>
                {articleDetail.description.substr(1,130)}
                </p>
                <a href="/" className="btn" alt="lire le suite de l'article" title="lien vers la suite de l'article">
                  Lire la suite<i class="fa fa-arrow-right"></i>
                </a> 
                     
            </div>
          </div>    
         </>
          
          )
        })
        
      )}
             

  



