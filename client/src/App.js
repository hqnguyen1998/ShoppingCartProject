import React, { lazy, Suspense, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Spinner from './components/Spinner/Spinner.component';
const Home = lazy(() => import('./pages/Home/Home.component'));
const AdminPage = lazy(() => import('./pages/Admin/AdminPage.component'));

const useStyles = makeStyles((theme) => ({
  spinner: {
    marginLeft: '45%',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Fragment>
      <Router>
        <Suspense fallback={<Spinner className={classes.spinner} />}>
          <Switch>
            <Route exact path='/admin'>
              <AdminPage />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </Fragment>
  );
}

export default App;
