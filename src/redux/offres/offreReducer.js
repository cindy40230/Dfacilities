const INITIAL_STATE ={
  offres:[]
}


function offreReducer(state=INITIAL_STATE,action){

  switch(action.type){
   
    case "LOADOFFRES":{
      return{
        ...state,
        offres: action.payload        
      }
    }
    default:   
  }
  return state
}
export default offreReducer


export const getOffres=()=>dispatch =>{
  const hostname ='http://localhost/serveurd_facilities/';
  //const hostname ='https://cindy-ruet.fr/dfacilities/serveurd_facilities/index.php?page=';
  fetch(`${hostname}front/offres`)
  .then(response => response.json())
  .then(data =>{
    dispatch({
        type:'LOADOFFRES',
        payload: data
    })
    
  })
}