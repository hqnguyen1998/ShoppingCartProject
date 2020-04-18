import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Typography, Grid, IconButton, Divider } from '@material-ui/core';
import { Add, Remove, Lock } from '@material-ui/icons';
import CustomButton from '../Button/CustomButton.component';
import {
  selectTotalPrice,
  selectCart,
} from '../../redux/actions/cart/cart.selectors';
import {
  increaseCartItem,
  decreaseCartItem,
} from '../../redux/actions/cart/cart.actions';
import './Cart.styles.scss';

const CartDropdown = ({
  open,
  onHandleToggle,
  totalPrices,
  cart,
  increaseCartItem,
  decreaseCartItem,
}) => {
  const onHandleDecreaseQuality = (itemId, event) => {
    decreaseCartItem(itemId);
  };

  const onHandleIncreaseQuality = (itemId, event) => {
    increaseCartItem(itemId);
  };

  return (
    <div className='cart' onMouseLeave={onHandleToggle} hidden={!open}>
      <div className='cart-header'>
        <Typography variant='h6'>
          {cart.length ? 'My Shopping List' : 'Your cart is empty!'}
        </Typography>
      </div>
      <div className='cart-items'>
        <Grid container spacing={3}>
          {cart.map((cart) => (
            <Grid key={cart.id} item md={12} className='cart-item'>
              <img src={cart.img} className='cart-image' alt={cart.name} />
              <div className='cart-item-info'>
                <div className='title'>
                  <Typography component='p'>{cart.name}</Typography>
                </div>

                <div className='quantity'>
                  <div onClick={onHandleDecreaseQuality.bind(this, cart.id)}>
                    <IconButton>
                      <Remove />
                    </IconButton>
                  </div>

                  <Typography component='span' className='quantity-number'>
                    {cart.quantity}
                  </Typography>
                  <div onClick={onHandleIncreaseQuality.bind(this, cart.id)}>
                    <IconButton>
                      <Add />
                    </IconButton>
                  </div>
                </div>
              </div>
              <div className='cart-item-price'>
                <span className='price'>${cart.price}</span>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <Divider />
      <div className='cart-total'>
        <span>Subtotal:</span>
        <span>{totalPrices}</span>
      </div>
      <CustomButton
        name='Checkout'
        variant='contained'
        color='secondary'
        startIcon={<Lock />}
        fullWidth
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  totalPrices: selectTotalPrice,
  cart: selectCart,
});

const mapDispatchToProps = {
  increaseCartItem,
  decreaseCartItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
