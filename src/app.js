import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './app.css';
import appSettings from './app/app-settings/app-settings';
import Header from './app/header';
import Home from './app/home';
import ExecuteFlows from './app/execute-flows';
import CreateRule from './app/create-rule';
import Footer from './app/footer';

const App = () => (
  <Router basename={appSettings.base_name}>
    <div className="app">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/execute-flows" component={ExecuteFlows} />
      <Route path="/create-rule" component={CreateRule} />
      <div className="clearfix" />
      <Footer />
    </div>
  </Router>
);

export default App;
