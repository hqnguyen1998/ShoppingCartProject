import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Spinner = ({ ...otherProps }) => {
  return <CircularProgress color='secondary' size={100} {...otherProps} />;
};

export default Spinner;
