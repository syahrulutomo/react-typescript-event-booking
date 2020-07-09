import React from 'react';
import StyledInput from './StyledInput'

interface InputProps {
  color?: string;
  fontStyle?: string;
  placeholder: string;
  width?: string;
}

const Input = (props: InputProps): JSX.Element => {
  return (
    <StyledInput {...props}/> 
  );
}

export default Input;
