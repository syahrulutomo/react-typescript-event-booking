import React from 'react';
import {
  FooterContainer,
  CreateGroupButton,
  CopyrightText,
  FooterText
} from "./Footer"

const Footer = () => {
  return (
    <FooterContainer>
      <CreateGroupButton>Start a new group</CreateGroupButton>
      <FooterText>Logout</FooterText>
      <CopyrightText>&copy; 2020 Build with <span style={{ color: "red" }}>&#10084;</span> by Syahrul Utomo</CopyrightText>
    </FooterContainer>
  );
}

export default Footer;
