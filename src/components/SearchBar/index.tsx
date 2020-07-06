import React from 'react';
import SearchBarWrapper from './Wrapper';
import Input from './../Input/index'

const Searchbar = () => {
  return (
    <SearchBarWrapper>
      <Input placeholder="Search" fontStyle='italic'/>
    </SearchBarWrapper>
  );
}

export default Searchbar;
