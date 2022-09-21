import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import MyRemarques from './myremarq';
import Favorites from './favorites';
import Layout from '../components/Layout';
import NotePage from './notes';
import SignUp  from "./signup";
import SignIn from './signin';

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/myremarq" component={MyRemarques} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/note/:id" component={NotePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </Layout>
    </Router>
  );
};

export default Pages;
