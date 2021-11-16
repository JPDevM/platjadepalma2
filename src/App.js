// Dependencies
import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// Middlewares

// Components
import Landing from './pages/Landing.js';
import Error404 from './pages/404.js';
import TermAndCond from './pages/termsAndCond';
import Privacy from './pages/Privacy';
import Experience from './pages/Experience';

// Styles
import './App.css';

// Media

const App = () => {
  return (
    <Fragment>
      {/* Router */}
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* <Route exact path="/login" component={} />
            <Route exact path="/forgot-password" component={} />
            <Route exact path="/contact" component={} />*/}
          <Route exact path="/privacidad" component={Privacy} />
          <Route exact path="/terminosycondiciones" component={TermAndCond} />
          <Route exact path="/experiencias/:id" component={Experience} />

          <Route path="/404" component={Error404} />
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
