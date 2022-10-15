const INITIAL_STATE ={
  equipe:[]
}


function equipeReducer(state=INITIAL_STATE,action){

  switch(action.type){
    

    case "LOADEQUIPE":{
      return{
        ...state,
        equipe: action.payload
        
      }
    }
    default:
    
  }
  return state
}
export default equipeReducer


export const getEquipe=()=>dispatch =>{
  const hostname='http://localhost/serveurd_facilities/';
  //const hostname ='https://cindy-ruet.fr/dfacilities/serveurd_facilities/index.php?page=';
  fetch(`${hostname}front/equipe`)
  .then(response => response.json())
  .then(data =>{
    dispatch({
        type:'LOADEQUIPE',
        payload: data
    })
    
  })
}