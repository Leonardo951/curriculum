import {combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddlware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import root from './middlwares';
import history from '../screens/history';
import colorCv from "./reducers/colorCv";
import auth from './reducers/auth';
import curriculumData from './reducers/curriculum';

const sagaMiddlware = createSagaMiddlware();

const middlwares = [
    sagaMiddlware,
    routerMiddleware(history),
];

const rootReducers = combineReducers({
    colorCv,
    auth,
    curriculumData
});

const store = createStore(connectRouter(history)(rootReducers),
applyMiddleware(...middlwares)
);

sagaMiddlware.run(root);

export default store;