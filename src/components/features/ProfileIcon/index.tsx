import React from 'react';
import StyledIcon from './Icon';
import Wrapper from './Wrapper';
import Image from './images/profil-icon.png';

const Icon = (): JSX.Element => {
  return (
    <Wrapper>
      <StyledIcon src={Image} alt="profile icon"/>
    </Wrapper>
  );
};


export default Icon;
