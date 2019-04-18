import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from "redux-thunk";

import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import gameReducer from '../reducers/GameReducer';


const rootReducer = combineReducers({
    game: gameReducer
});

const persistConfig = {
    key: 'root',
    storage,
}

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middleware)));

export const persistor = persistStore(store)