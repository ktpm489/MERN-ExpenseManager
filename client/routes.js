
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppDemo from './components/AppDemo';
export const Routes = () => (
    <Switch>
        <Route exact path='/' component={AppDemo} />
    </Switch>
);
export default Routes;