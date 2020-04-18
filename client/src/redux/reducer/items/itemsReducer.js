import { FETCH_ALL_ITEM } from '../../types';

const initialState = {
  items: [],
  item: {},
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_ITEM:
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
