import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';

import Navbar from '../components/Navbar';
import ScreenHomePageHome from "./ScreenHomePageHome";
import Register from "./Register";
import Curriculo from './Curriculo';
import Cv from './Cv';
import Login from "./Login";

const ScreensRoot = () => (
    <ConnectedRouter history={history}>
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={ScreenHomePageHome} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/curriculo" component={Curriculo} />
                <Route exact path="/cv" component={Cv} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </div>
    </ConnectedRouter>
);

export default ScreensRoot;