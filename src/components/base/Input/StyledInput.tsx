import styled from 'styled-components';

interface InputProps {
  color?: string;
  fontStyle?: string; 
}

const Input = styled.input<InputProps>`
  font-weight: 300;
  font-size: 16px;
  line-height: 14px;
  padding: 12px 32px 12px 8px;
  color: ${ props => props.color ? props.color : '#444' };
  font-style: ${ props => props.fontStyle? props.fontStyle : 'normal' };
  letter-spacing: .5px;
  border: none;
  border-radius: 2px; 
`

export default Input;