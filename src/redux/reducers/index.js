import { combineReducers } from  'redux';
import posts from './posts';
import inputs from './inputs';


export default combineReducers({
    posts,
    inputs,
})