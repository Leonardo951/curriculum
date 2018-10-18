import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import * as serviceWorker from './serviceWorker';
import ScreensRoot from './screens/Router';

ReactDOM.render(
    <ScreensRoot/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
