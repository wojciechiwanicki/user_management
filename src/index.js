import React from 'react';
import ReactDOM from 'react-dom';
import './resources/css/main.css';
import App from './resources/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './resources/reducers';

const store = createStore(allReducers);
ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
