import * as React from "react";
import StyledApp from "./StyledApp";
import Nav from "./../../components/Nav/index";
import Banner from "./../../components/Banner/index";
import SearchBar from "./../../components/SearchBar/index";

import GlobalStyles from "./../../global-styles";

export default function App(): JSX.Element {
  return (
    <StyledApp>
      <Nav/>
      <Banner/>
      <SearchBar />
      <GlobalStyles/>
    </StyledApp>
  )
}