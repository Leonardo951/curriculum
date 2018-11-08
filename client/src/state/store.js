import {combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddlware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import root from './middlwares';
import history from '../screens/history';
import colorCv from "./reducers/cv/colorCv";
import auth from './reducers/auth/register';

const sagaMiddlware = createSagaMiddlware();

const middlwares = [
    sagaMiddlware,
    routerMiddleware(history),
];

const rootReducers = combineReducers({
    colorCv,
    auth
});

const store = createStore(connectRouter(history)(rootReducers),
applyMiddleware(...middlwares)
);

sagaMiddlware.run(root);

export default store;