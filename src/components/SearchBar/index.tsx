import React from 'react';
import SearchBarWrapper from './Wrapper';
import Input from './../Input/index';
import { ToggleButton } from './ToggleButton';
import { Icon, IconWrapper } from './Icon';
import SearchIcon from './search-glass.png';

const Searchbar = () => {
  return (
    <SearchBarWrapper>
      <IconWrapper>
        <Input placeholder="Search" fontStyle='italic'/>
        <Icon src={SearchIcon} alt="search" />
      </IconWrapper>
      <ToggleButton>Calendar</ToggleButton>
    </SearchBarWrapper>
  );
}

export default Searchbar;
