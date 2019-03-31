import React from 'react';
import {Provider} from 'react-redux';

import AppContainer from "./AppContainer";

import store from './store/store'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}

