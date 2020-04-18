import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Typography, makeStyles, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { addItemToCart } from '../../redux/actions/cart/cart.actions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  collectionHeader: {
    marginBottom: theme.spacing(2),
  },
  collectionTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  collectionImage: {
    width: '100%',
    position: 'relative',
  },
  collectionAddToCart: {
    position: 'absolute',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    opacity: 0.8,
    color: '#000',
    textAlign: 'center',
    bottom: 0,
    left: 0,
    padding: 10,
    zIndex: 100,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  image: {
    width: '100%',
  },
  collectionName: {
    display: 'block',
    textAlign: 'center',
  },
  collectionPrice: {
    display: 'block',
    textAlign: 'center',
    color: '#ccc',
  },
}));

const Collection = ({ collection, addItemToCart, collections }) => {
  const classes = useStyles();
  const [toggle, setToggle] = useState(true);

  const onHandleToggle = (e) => {
    setToggle(!toggle);
  };

  const onHandleAddItemToCart = () => {
    addItemToCart(collection);
  };

  return (
    <Grid item xs={6} sm={3} md={3}>
      <div
        className={classes.collectionImage}
        onMouseEnter={() => onHandleToggle()}
        onMouseLeave={() => onHandleToggle()}
      >
        <img
          src={collection.img}
          alt={collection.name}
          className={classes.image}
        />
        <Typography
          variant='body1'
          component='span'
          onClick={onHandleAddItemToCart}
          className={classes.collectionAddToCart}
          hidden={toggle && 'hidden'}
        >
          <IconButton color='inherit'>
            <ShoppingCart />
          </IconButton>
          Add to cart
        </Typography>
      </div>
      <div>
        <Typography
          variant='caption'
          component='span'
          className={classes.collectionName}
        >
          {collection.name} - {collection.color}
        </Typography>
        <Typography
          variant='caption'
          component='span'
          className={classes.collectionPrice}
        >
          ${collection.price}
        </Typography>
      </div>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  collections: state.collections,
});

const mapDispatchToProps = {
  addItemToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
