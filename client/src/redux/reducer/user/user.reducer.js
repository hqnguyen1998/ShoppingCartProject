import { USER_LOADED, SIGN_OUT, AUTH_ERROR, SET_TOGGLE } from '../../types';

const initialState = {
  user: {},
  isLoading: true,
  isAuth: false,
  isToggle: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        isLoading: false,
        isAuth: true,
      };
    case SIGN_OUT:
    case AUTH_ERROR:
      return {
        ...state,
        user: {},
        isLoading: false,
        isAuth: false,
      };
    case SET_TOGGLE:
      return {
        ...state,
        isToggle: payload,
      };
    default:
      return state;
  }
};
