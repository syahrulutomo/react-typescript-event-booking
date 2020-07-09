import React, { useState } from "react";
import { NavContainer, NavList, NavListItem, NavListTitle, NavListIcon } from "./Nav";
import searchIcon from "./images/search.svg";
import groupsIcon from "./images/groups.svg";
import notificationsIcon from "./images/notifications.svg";
import ProfileIcon from '../../features/ProfileIcon/index';

const Nav = (): JSX.Element => {
  const [navItems, setNavItems] = useState([
    { name: "Explore", icon: searchIcon },
    { name: "Groups", icon: groupsIcon },
    { name: "Notification", icon: notificationsIcon },
    { name: "Profile", icon: '' }, 
  ])

  const navItemsTemplate = navItems.map((data, index) => {
    let icon;
    if(data.name === 'Profile') {
      icon = <ProfileIcon />
    } else {
      icon = <NavListIcon src={data.icon} alt={data.name}/>
    }
    return (
      <NavListItem key={index}>
        { icon }
        <NavListTitle>{data.name}</NavListTitle>
      </NavListItem>
    )
  })

  return (
    <NavContainer>
      <NavList>
        { navItemsTemplate }
      </NavList>
    </NavContainer>
  );
}

export default Nav;
