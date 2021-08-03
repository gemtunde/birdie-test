import {combineReducers} from 'redux';
import { authReducer } from './auth';

//combine reducer exported to index.js file
const rootReducer = combineReducers({
    auth : authReducer,
  });

export default rootReducer

 