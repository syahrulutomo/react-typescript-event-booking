import styled from "styled-components";

interface ToggleButtonProps {
  active: boolean;
}

export const CalendarButton = styled.div<ToggleButtonProps>`
  width: 100%;
  box-sizing: border-box;
  padding: .5rem;
  background: #0f1721!important;
  color: #FFF!important;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  position: relative;
  left: ${ props => props.active ? '0px' : '-150px' };
  top: 0;
  transition: left 1s ease;
`

export const GroupsButton = styled.div<ToggleButtonProps>`
  box-sizing: border-box;
  width: 100%;
  padding: .5rem;
  background: rgba(255,255,255,.2)!important;
  color: #FFF!important;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  position: absolute;
  right: ${ props => props.active ? '0px' : '-150px' };
  top: 0;
  transition: right 1s ease;
`

export const ToggleButtonWrapper = styled.div`
  position: relative;
  display: flex;
  width: 120px;
  overflow-x: hidden;
  height: 42px;
  margin-left: 2rem;
  box-sizing: border-box;
  border: 1px solid rgba(255,255,255,.2);
  border-radius: 2px;
`