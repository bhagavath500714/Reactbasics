import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </React.Fragment>
    </BrowserRouter>
    , document.getElementById('root'));