import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from '../reducer/cart/cart.reducer';
import itemsReducer from '../reducer/items/itemsReducer';

export default combineReducers({
  users: userReducer,
  cart: cartReducer,
  items: itemsReducer,
});
