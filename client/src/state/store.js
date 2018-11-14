import {combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import root from './middlewares';
import history from '../screens/history';
import colorCv from "./reducers/colorCv";
import auth from './reducers/auth';
import curriculumData from './reducers/curriculum';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
    sagaMiddleware,
    routerMiddleware(history),
];

const rootReducers = combineReducers({
    colorCv,
    auth,
    curriculumData
});

const store = createStore(connectRouter(history)(rootReducers),
applyMiddleware(...middleware)
);

sagaMiddleware.run(root);

export default store;