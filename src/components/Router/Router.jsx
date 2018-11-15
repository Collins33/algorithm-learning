import React from 'react';
import {NavLink, Switch, Route } from 'react-router-dom'
import App from '../../views/App/App'
import About from '../../views/About/About'
import NotFound from '../../components/NotFound/NotFound'

const Router = () => (
    <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route path="*" component={NotFound}></Route>
    </Switch>
)

export default Router;