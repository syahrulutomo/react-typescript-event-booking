import React from 'react';
import StyledNav from './Nav';
import Logo from './../Logo/index';
import Icon from './../ProfileIcon/index';

const Nav = (): JSX.Element => {
  return (
    <StyledNav>
      <Logo title="Event Booker"/>
      <Icon />
    </StyledNav>
  );
}

export default Nav;
