import { FETCH_ALL_ITEM } from '../../types';

export const fetchAllItems = (data) => (dispatch) => {
  dispatch({
    type: FETCH_ALL_ITEM,
    payload: data,
  });
};
