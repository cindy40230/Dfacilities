import{createStore,applyMiddleware,combineReducers}from 'redux';
import articleReducer from './articles/articleReducer';
import offreReducer from './offres/offreReducer';
import partenaireReducer from './partenaires/partenaireReducer';
import equipeReducer from './equipe/equipeReducer';


import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  articleReducer,offreReducer,partenaireReducer,equipeReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store