import * as React from "react";
import { AppContainer, AppContent } from "./StyledApp";
import Nav from "components/partials/Nav/index";
// import Banner from "../../../components/features/Banner/index";
// import SearchBar from "../../../components/features/SearchBar/index";
import Highlights from "components/features/Highlights/index";
import Notification from "components/features/Notification/index";
import Footer from "components/partials/Footer/index";

import GlobalStyles from "../../../global-styles";

export default function App(): JSX.Element {
  return (
    <AppContainer>
      <Nav/>
      <AppContent>
        <Highlights/>
        <Notification/>
      </AppContent>
      <Footer/>
      <GlobalStyles/>
    </AppContainer>
  )
}