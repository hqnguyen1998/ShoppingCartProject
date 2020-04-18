import React from 'react';
import { Button } from '@material-ui/core';

const CustomButton = ({ name, ...otherProps }) => {
  return <Button {...otherProps}>{name}</Button>;
};

export default CustomButton;
