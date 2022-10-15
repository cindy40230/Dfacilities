const INITIAL_STATE ={
  articles:[]
}


function articleReducer(state=INITIAL_STATE,action){

  switch(action.type){
    

    case "LOADARTICLES":{
      return{
        ...state,
        articles: action.payload
        
      }
    }
    default:
    
  }
  return state
}
export default articleReducer


export const getArticles=()=>dispatch =>{
  const hostname ='http://localhost/serveurd_facilities/';
  //const hostname ='https://cindy-ruet.fr/dfacilities/serveurd_facilities/index.php?page=';
  fetch(`${hostname}front/articles`)
 
  .then(response => response.json())
  .then(data =>{
    dispatch({
        type:'LOADARTICLES',
        payload: data
    })
    
  })
}