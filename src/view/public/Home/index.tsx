import React from "react";
import { LogoPrimary, LogoWrapper } from "components/base/Logo/Logo";
import { NavPublicContainer, NavPublicMenuItem, NavPublicMenu } from "components/partials/Nav/Nav";
import { PublicBanner, PublicBannerWrapper, PublicBannerTitle, PublicBannerJoinButton, PublicBannerImageWrapper, PublicBannerImage } from "components/features/Banner/StyledBanner";
import { PublicSearchBarContainer, PublicSearchBarInputWrapper, PublicSearchBarEvent, PublicSearchBarLocation, InputIcon, PublicSearchButton } from "components/features/SearchBar/PublicSearchBar"; 
import { AppContainer } from "../../private/Home/StyledApp";
import GlobalStyles from "../../../global-styles";
import LogoPrimaryImage from "root/assets/images/logo-primary.svg";
import Hero from "root/assets/images/hero-public.png";
import SearchIcon from "root/assets/images/search-black-18dp.svg";
import LocationIcon from "root/assets/images/location.svg";

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
          <div>
            <PublicBannerTitle>Discover events for all the things you love</PublicBannerTitle>
            <PublicBannerJoinButton role="navigation" href="#" ariaLabel="Join Meetup">Join Meetup</PublicBannerJoinButton>
          </div>
          <PublicBannerImageWrapper>
            <PublicBannerImage src={Hero} alt="Hero"/>
          </PublicBannerImageWrapper>
        </PublicBannerWrapper>
      </PublicBanner>
      <PublicSearchBarContainer>
        <PublicSearchBarInputWrapper>
          <PublicSearchBarEvent placeholder="Find your next event" />
          <InputIcon src={SearchIcon}/>
        </PublicSearchBarInputWrapper>
        <PublicSearchBarInputWrapper>
          <PublicSearchBarLocation placeholder="Kudus, ID" />
          <InputIcon src={LocationIcon}/>
        </PublicSearchBarInputWrapper>
        <PublicSearchButton>
          Search
        </PublicSearchButton>
      </PublicSearchBarContainer>
      <GlobalStyles/>
    </AppContainer>
  );
}

export default HomePublic;
