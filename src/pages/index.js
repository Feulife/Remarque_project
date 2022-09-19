import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import MyRemarques from './myremarq';
import Favorites from './favorites';
import Layout from '../components/Layout';
import NotePage from './notes';
import SingUp  from "./singup";

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/myremarq" component={MyRemarques} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/note/:id" component={NotePage} />
        <Route path="/singup" component={SingUp} />
      </Layout>
    </Router>
  );
};

export default Pages;
