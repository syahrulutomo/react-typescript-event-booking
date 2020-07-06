import React from 'react';
import StyledBanner from './StyledBanner';
import Title from './Title';
import Subtitle from './Subtitle';

const Banner = () => {
  return (
    <StyledBanner>
      <Title>Find your next event</Title>
      <Subtitle>1 event in your group </Subtitle>
      <Subtitle> 53 events near you</Subtitle>
    </StyledBanner>
  );
}

export default Banner;
