import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

//Custom Imports
import Title from './Title';
import Options from './Options'

ReactDOM.render(<Title title="ProKeys Options"/>, document.getElementById('title-name'));
ReactDOM.render(<Options/>, document.getElementById('button-options'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
