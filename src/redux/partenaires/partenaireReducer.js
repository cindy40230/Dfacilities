const INITIAL_STATE ={
  partenaires:[]
}


function partenaireReducer(state=INITIAL_STATE,action){

  switch(action.type){
    

    case "LOADPARTENAIRES":{
      return{
        ...state,
        partenaires: action.payload
        
      }
    }
    default:
    
  }
  return state
}
export default partenaireReducer


export const getPartenaires=()=>dispatch =>{
  const hostname ='http://localhost/serveurd_facilities/';
 //const hostname ='https://cindy-ruet.fr/dfacilities/serveurd_facilities/index.php?page=';
 fetch(`${hostname}front/partenaires`)
 
  .then(response => response.json())
  .then(data =>{
    dispatch({
        type:'LOADPARTENAIRES',
        payload: Object.values(data)
    })
    
  })
}