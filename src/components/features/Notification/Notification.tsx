import styled from "styled-components";

export const NotificationContainer = styled.div`
  padding: 0px 12px 0 12px;
`

export const NotificationList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  border: 1px solid rgba(0,0,0,.12);
  box-shadow: 0px 1px 1px 0px rgba(0,0,0, .25);
  margin-bottom: 13px;
`

export const NotificationContent = styled.div`
  display: flex;
  padding: 12px;
  border-bottom: 1px solid rgba(0,0,0,.12);

  &:last-of-type {
    border-bottom: none;
  }
`

export const NotificationLeftPart = styled.div`
  display: block;
`

interface ImageProps {
  src: string;
  alt: string;
}

export const NotificationImage = styled.img<ImageProps>`
  width: 48px;
  height: 48px;
`

export const NotificationRightPart = styled.div`
  margin-left: 12px;
`

export const NotificationText = styled.p`
  color: rgba(0,0,0,.87);
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 13px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-weight: 300;
`

export const NotificationTime = styled.span`
  color: rgba(0,0,0,.54);
  font-size: 10.56px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-weight: 400;
  margin-left: 4px;
`