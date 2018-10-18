import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Navbar from '../components/Navbar';
import ScreenHomePageHome from "./HomePage/ScreenHomePageHome";
import Register from "./Register";

const ScreensRoot = () => (
    <div>
        <Navbar/>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ScreenHomePageHome} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default ScreensRoot;