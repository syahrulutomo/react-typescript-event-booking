import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 24px 16px 8px;
  box-sizing: border-box;
  background-color: #0f1721;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  justify-content: center;
  z-index: -1;

  @media (min-height: 900px) {
    position: absolute;
  }
`

export const CreateGroupButton = styled.button`
  padding: 10px 16px 8px;
  width: 100%;
  color: #FFF;
  background-color: transparent;
  border: 1px solid rgba(255,255,255,.7);
  border-radius: 2px;
  font-weight: 600;
  font-size: 18px;
`

export const CopyrightText = styled.p`
  color: rgba(255,255,255,.7);
  font-size: 13px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  line-height: 1.6;
  margin: 0;
  text-align: center;
`

export const FooterText = styled.p`
  color: #FFF;
  font-size: 14px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  line-height: 1.6;
`