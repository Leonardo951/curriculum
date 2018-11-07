import {combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddlware from 'redux-saga';
import root from './middlwares';
import colorCv from "./reducers/cv/colorCv";
import auth from './reducers/auth/register';

const sagaMiddlware = createSagaMiddlware();

const store = createStore(combineReducers({
    colorCv,
    auth
    }),
applyMiddleware(sagaMiddlware)
);

sagaMiddlware.run(root);

export default store;