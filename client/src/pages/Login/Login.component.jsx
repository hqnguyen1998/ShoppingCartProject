import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Paper, Typography, makeStyles, Grid } from '@material-ui/core';
import { Facebook } from '@material-ui/icons';
import CustomButton from '../../components/Button/CustomButton.component';
import CustomInput from '../../components/CustomInput/CustomInput.component';
import Alert from '../../components/Alert/Alert.component';
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from '../../firebase/firebase';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '50%',
    padding: theme.spacing(2),
    margin: `50px auto`,
  },
  formTitle: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  input: {
    marginTop: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(3),
  },
}));

const Login = ({ title, history, isAuth }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    email: '',
    password: '',
    error: null,
  });

  useEffect(() => {
    if (isAuth) {
      history.push('/');
    }
  }, [isAuth, history]);

  const { email, password, error } = state;

  const onHandleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onHandleSubmitForm = (e) => {
    e.preventDefault();
    doSignInWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch((err) => setState({ ...state, error: err.message }));
  };

  const onHandleSignInGoogle = () => {
    doSignInWithGoogle();
  };

  return (
    <Paper
      component='form'
      onSubmit={onHandleSubmitForm}
      className={classes.wrapper}
      elevation={3}
    >
      {error && <Alert type='error' msg={error} />}
      <Typography variant='h6' className={classes.formTitle}>
        {title}
      </Typography>
      <CustomInput
        id='email'
        type='email'
        name='email'
        onChange={onHandleInputChange}
        value={email}
        label='Email Address'
        className={classes.input}
        required
        fullWidth
      />
      <CustomInput
        id='password'
        type='password'
        label='Password'
        name='password'
        onChange={onHandleInputChange}
        value={password}
        className={classes.input}
        required
        fullWidth
      />
      <Typography variant='caption'>
        Don't you have an account ? <Link to='/register'>Register Now!</Link>
      </Typography>
      <CustomButton
        type='submit'
        variant='contained'
        color='secondary'
        name='Login'
        fullWidth
        className={classes.button}
      />
      <Grid container spacing={2}>
        <Grid item md={6}>
          <CustomButton
            variant='contained'
            color='primary'
            name='Sign In With Google'
            style={{ backgroundColor: '#4285F4' }}
            fullWidth
            onClick={onHandleSignInGoogle}
            className={classes.button}
          />
        </Grid>
        <Grid item md={6}>
          <CustomButton
            variant='contained'
            color='primary'
            name='Sign In With FaceBook'
            style={{ backgroundColor: '#4267B2' }}
            fullWidth
            startIcon={<Facebook />}
            className={classes.button}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.users.isAuth,
});

export default connect(mapStateToProps)(withRouter(Login));
