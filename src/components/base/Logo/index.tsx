import React from 'react';
import {TextLogo} from './Logo';
import Wrapper from './Wrapper';

interface Logo {
  title: string; 
}

const Logo = (props: Logo): JSX.Element => {
  const { title } = props;
  
  return (
    <Wrapper>
      <TextLogo>{title}</TextLogo>
    </Wrapper>
  );
};


export default Logo;
