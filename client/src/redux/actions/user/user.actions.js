import {
  USER_LOADED,
  LOGIN_SUCCESS,
  SIGN_OUT,
  AUTH_ERROR,
  SET_TOGGLE,
} from '../../types';

export const userLoaded = (data) => (dispatch) => {
  if (data === null) {
    dispatch({
      type: AUTH_ERROR,
    });
    return;
  }
  dispatch({
    type: USER_LOADED,
    payload: data,
  });
};

export const userLogin = () => (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
  });
};

export const signOut = () => (dispatch) => {
  dispatch({
    type: SIGN_OUT,
  });
};

export const setToggle = (toggle) => (dispatch) => {
  dispatch({
    type: SET_TOGGLE,
    payload: toggle,
  });
};
