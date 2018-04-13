import {createStore} from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import {gameReducer} from './reducers'

export default createStore(
    gameReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    //composeWithDevTools()
);