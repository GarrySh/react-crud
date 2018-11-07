import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import NotFound from './NotFound';
import Products from '../containers/Products';
import ViewProducts from '../containers/ViewProducts';

export default () => (
  <Router>
    <div>
      <Header />
      <main className="container">
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/products" component={Products} exact />
          <Route path="/products/:id" component={ViewProducts} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </div>
  </Router>
);
