import React from 'react';
import { FormControl, InputLabel, Input } from '@material-ui/core';

const CustomInput = ({
  id,
  type,
  label,
  name,
  value,
  onChange,
  ...otherProps
}) => {
  return (
    <FormControl {...otherProps}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />
    </FormControl>
  );
};

export default CustomInput;
