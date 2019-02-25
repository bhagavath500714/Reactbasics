import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Exercise from './components/Exercise';
import Login from './components/Login';
import Product from './components/Product';
import Validation from './components/Validation';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/form" component={Form} />
            <Route path="/exercise" component={Exercise} />
            <Route path="/product" component={Product} />
            <Route path="/validation" component={Validation} />
        </React.Fragment>
    </BrowserRouter>
    , document.getElementById('root'));