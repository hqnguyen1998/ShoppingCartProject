import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    width: '100vw',
    height: '95vh',
    position: 'relative',
  },
  imageOpacity: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    opacity: 0.4,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  buttonGroup: {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  button: {
    margin: '0 10px',
  },
}));

const Wallpaper = ({ url }) => {
  const classes = useStyles();
  return (
    <div className={classes.imageContainer}>
      <div className={classes.imageOpacity} />
      <img src={url} alt='clothing' className={classes.image} />
      <div className={classes.buttonGroup}>
        <div className={classes.button}>
          <Button variant='contained' size='large' color='primary'>
            Mens Clothes
          </Button>
        </div>
        <div className={classes.button}>
          <Button variant='contained' size='large' color='secondary'>
            Womens Clothes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Wallpaper;
