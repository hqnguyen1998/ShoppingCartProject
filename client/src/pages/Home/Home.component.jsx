import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { userLoaded } from '../../redux/actions/user/user.actions';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/Navbar/Navbar.component';
import Login from '../Login/Login.component';
import Register from '../Register/Register.component';
import PageNotFound from '../PageNotFound/PageNotFound.component';
import HomePage from './HomePage.component';

const Home = ({ userLoaded }) => {
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      userLoaded(userAuth);
    });
  }, [userLoaded]);

  const { url } = useRouteMatch();

  return (
    <div>
      <Helmet>
        <title>Gym Clothing || Official Pages</title>
      </Helmet>
      <Navbar title='Gym Clothing' />
      <Switch>
        <Route exact path={url}>
          <HomePage />
        </Route>
        <Route exact path={`${url}login`}>
          <Login title='Login Form To Gym Clothing' />
        </Route>
        <Route exact path={`${url}register`}>
          <Register title='Register Form To Gym Clothing' />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
};

const mapDispatchToProps = {
  userLoaded,
};

export default connect(null, mapDispatchToProps)(Home);
