import React from "react";
import { LogoPrimary, LogoWrapper } from "components/base/Logo/Logo";
import { NavPublicContainer, NavPublicMenuItem, NavPublicMenu } from "components/partials/Nav/Nav";
import { PublicBanner, PublicBannerWrapper, PublicBannerTitle, PublicBannerJoinButton, PublicBannerImageWrapper } from "components/features/Banner/StyledBanner";
import { AppContainer } from "../../private/Home/StyledApp";
import GlobalStyles from "../../../global-styles";
import App from "../../private/Home/index";
import LogoPrimaryImage from "root/assets/images/logo-primary.svg";
import Hero from "root/assets/images/hero-public.png";

const HomePublic = (): JSX.Element => {
  return (
    <AppContainer>
      <NavPublicContainer>
        <LogoWrapper>
          <LogoPrimary src={LogoPrimaryImage}/>
        </LogoWrapper>
        <NavPublicMenu>
          <NavPublicMenuItem>Log in</NavPublicMenuItem>
          <NavPublicMenuItem>Sign up</NavPublicMenuItem>  
        </NavPublicMenu>
      </NavPublicContainer>
      <PublicBanner>
        <PublicBannerWrapper>
          <PublicBannerTitle>Discover events for all the things you love</PublicBannerTitle>
          <PublicBannerJoinButton role="navigation" href="#" ariaLabel="Join Meetup">Join Meetup</PublicBannerJoinButton>
        </PublicBannerWrapper>
        <PublicBannerImageWrapper>
          <img src={Hero} alt="Hero" style={{ width: "100%" }}/>
        </PublicBannerImageWrapper>
      </PublicBanner>
      <GlobalStyles/>
    </AppContainer>
  );
}

export default HomePublic;
