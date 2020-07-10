import React from "react";
import { 
  HighlightsContainer, 
  HighlightsTitle, 
  HighlightsContentContainer, 
  HighlightsContentWrapper, 
  HighlightsContentTitle,
  HighlightsContentText
} from "./Highlights"

const Highlights = () => {
  return (
    <HighlightsContainer>
      <HighlightsTitle>What's happening</HighlightsTitle>
      <HighlightsContentContainer>
        <HighlightsContentWrapper>
          <HighlightsContentTitle>3</HighlightsContentTitle>
          <HighlightsContentText>event in your groups</HighlightsContentText>
        </HighlightsContentWrapper>
        <HighlightsContentWrapper>
          <HighlightsContentTitle>60</HighlightsContentTitle>
          <HighlightsContentText>events near you</HighlightsContentText>
        </HighlightsContentWrapper>
      </HighlightsContentContainer>
    </HighlightsContainer>
  );
}

export default Highlights;
