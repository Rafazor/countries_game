import {createStore, combineReducers} from 'redux';

import gameReducer from '../reducers/GameReducer';

const rootReducer = combineReducers({
    game: gameReducer
});

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());