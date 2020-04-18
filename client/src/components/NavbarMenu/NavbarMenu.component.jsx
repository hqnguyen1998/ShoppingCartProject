import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
}));

const NavbarMenu = ({ label, url, component, className, ...otherProps }) => {
  const classes = useStyles();
  return (
    <Typography component={component} className={className} {...otherProps}>
      <Link to={url} className={classes.link}>
        {label}
      </Link>
    </Typography>
  );
};

export default NavbarMenu;
