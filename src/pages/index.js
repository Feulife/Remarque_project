import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Layout from '../components/Layout';

import Home from './home';
import MyRemarques from './myremarques';
import Favorites from './favorites';
import Remarque from './remarque';
import SignUp from './signup';
import SignIn from './signin';
import NewRemarque from './new';
import EditRemarque from './edit';

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/myremarques" component={MyRemarques} />
        <PrivateRoute path="/favorites" component={Favorites} />
        <Route path="/remarque/:id" component={Remarque} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute path="/new" component={NewRemarque} />
        <PrivateRoute path="/edit/:id" component={EditRemarque} />
      </Layout>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <Route
      {...rest}
      render={props =>
        data.isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default Pages;