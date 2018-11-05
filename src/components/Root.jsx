import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import NotFound from './NotFound';

export default () => (
  <Router>
    <div>
      <Header />
      <main className="container">
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </div>
  </Router>
);
