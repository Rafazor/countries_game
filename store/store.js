import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import gameReducer from '../reducers/GameReducer';


const rootReducer = combineReducers({
    game: gameReducer
});

export default createStore(
    rootReducer,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());