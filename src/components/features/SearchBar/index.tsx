import React, { useState } from 'react';
import SearchBarWrapper from './Wrapper';
import Input from '../../base/Input/index';
import { CalendarButton, GroupsButton, ToggleButtonWrapper } from './ToggleButton';
import { Icon, IconWrapper } from './Icon';
import SearchIcon from './images/search-glass.png';
import { FilterWrapper, Filter } from './Filter';

const Searchbar = () => {
  const [filterBy, setFilterBy] = useState('Calendar');
  
  const handleToggle = () => {
    if(filterBy === 'Calendar') {
      setFilterBy('Groups');
    } else {
      setFilterBy('Calendar');
    }
  }
  
  return (
    <SearchBarWrapper>
      <div style={{ display: "flex" }}>
        <IconWrapper>
          <Input placeholder="Search"/>
          <Icon src={SearchIcon} alt="search" />
        </IconWrapper>
        <FilterWrapper>
          <span>within</span>
          <Filter>50 miles</Filter>
          <span>of</span>
          <Filter>Jakarta, ID</Filter>
        </FilterWrapper>
      </div>
      <ToggleButtonWrapper>
        <CalendarButton active={filterBy === 'Calendar' ? true : false} onClick={() => setFilterBy('Groups')}>Calendar</CalendarButton> :
        <GroupsButton active={filterBy === 'Groups' ? true : false} onClick={() => setFilterBy('Calendar')}>Groups</GroupsButton>
      </ToggleButtonWrapper>
    </SearchBarWrapper>
  );
}

export default Searchbar;
