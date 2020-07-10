import styled from 'styled-components';

export const NavContainer = styled.nav`
  background-color: #FFFFFF;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid #F0F0F0;
  align-items: center;
  padding: 8px 0;
`
export const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
  text-align: center;
`

export const NavListItem = styled.li`
  list-style: none;
`

export const NavListIcon = styled.img`
  width: 26px;
  height: 26px;
  fill: rgba(0,0,0,.26)!important;
`

export const NavListTitle = styled.p`
  color: rgb(0,0,0, .52);
  font-size: 12px;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  margin-bottom: 0;
  margin-top: 0;
`

export const NavPublicContainer = styled.nav`
  background-color: #FFF;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavPublicMenu = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 8px;
`

export const NavPublicMenuItem = styled.div`
  color: #212121;
  padding: 8px 12px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
`