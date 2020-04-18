import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import CustomButton from '../../components/Button/CustomButton.component';
import CustomInput from '../../components/CustomInput/CustomInput.component';
import { doCreateUserWithEmailAndPassword } from '../../firebase/firebase';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '50%',
    padding: theme.spacing(2),
    margin: `50px auto`,
  },
  formTitle: {
    textAlign: 'center',
  },
  input: {
    marginTop: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(3),
  },
}));

const Register = ({ title, history, isAuth }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    error: null,
  });

  useEffect(() => {
    if (isAuth) {
      history.push('/');
    }
  }, [history, isAuth]);

  const { username, email, password, password2, error } = state;

  const onHandleChangeInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onHandleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const user = await doCreateUserWithEmailAndPassword(email, password);

      console.log(user);
    } catch (err) {
      if (err) {
        setState({ ...state, error: err.message });
      }
    }
  };

  const isInvalid =
    password !== password2 ||
    password === '' ||
    email === '' ||
    username === '';

  return (
    <Paper
      component='form'
      onSubmit={onHandleSubmitForm}
      className={classes.wrapper}
      elevation={3}
    >
      <Typography variant='h6' className={classes.formTitle}>
        {title}
      </Typography>
      <CustomInput
        id='username'
        type='text'
        label='Username'
        name='username'
        onChange={onHandleChangeInput}
        value={username}
        className={classes.input}
        fullWidth
      />
      <CustomInput
        id='email'
        type='email'
        label='Email Address'
        name='email'
        required
        onChange={onHandleChangeInput}
        value={email}
        className={classes.input}
        fullWidth
      />
      <CustomInput
        id='password'
        type='password'
        label='Password'
        name='password'
        onChange={onHandleChangeInput}
        value={password}
        className={classes.input}
        fullWidth
      />
      <CustomInput
        id='password2'
        type='password'
        name='password2'
        onChange={onHandleChangeInput}
        value={password2}
        label='Re-enter Password'
        className={classes.input}
        fullWidth
      />
      <CustomButton
        type='submit'
        variant='contained'
        color='primary'
        name='Register'
        fullWidth
        disabled={isInvalid}
        className={classes.button}
      />
      {error && <p>{error.message}</p>}
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.users.isAuth,
});

export default connect(mapStateToProps)(withRouter(Register));
