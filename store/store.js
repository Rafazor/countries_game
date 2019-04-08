import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import gameReducer from '../reducers/GameReducer';


const rootReducer = combineReducers({
    game: gameReducer
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor = persistStore(store)