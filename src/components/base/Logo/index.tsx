import React from 'react';
import StyledLogo from './Logo';
import Wrapper from './Wrapper';

interface Logo {
  title: string; 
}

const Logo = (props: Logo): JSX.Element => {
  const { title } = props;
  
  return (
    <Wrapper>
      <StyledLogo>{title}</StyledLogo>
    </Wrapper>
  );
};


export default Logo;
