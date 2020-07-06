import React from 'react';
import StyledInput from './StyledInput'

interface InputProps {
  color?: string;
  fontStyle?: string;
  placeholder: string;
}

const Input = (props: InputProps): JSX.Element => {
  
  let input = <StyledInput/>;
  if (props.color) {
    input = <StyledInput color={props.color} placeholder={props.placeholder}/>
  } else if (props.fontStyle) {
    input =  <StyledInput fontStyle={props.fontStyle} placeholder={props.placeholder}/>
  } else if (props.color && props.fontStyle) {
    input =  <StyledInput color={props.color} fontStyle={props.fontStyle} placeholder={props.placeholder}/>
  }
  
  return (
    input 
  );
}

export default Input;
