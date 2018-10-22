import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Navbar from '../components/Navbar';
import ScreenHomePageHome from "./ScreenHomePageHome";
import Register from "./Register";
import Curriculo from './Curriculo';
import Cv from './Cv';

const ScreensRoot = () => (
    <div>
        <Navbar/>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ScreenHomePageHome} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/curriculo" component={Curriculo} />
                <Route exact path="/cv" component={Cv} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default ScreensRoot;