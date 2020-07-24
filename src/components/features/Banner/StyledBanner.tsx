import styled from 'styled-components';

export const Banner = styled.div`
  background-color: #00455D;
  padding: 34px 0 48px 0;
  text-align: center;
`

export const PublicBanner = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px 32px 20px;
  position: relative;
  box-sizing: border-box;
  margin-top: 1rem;

  @media screen and (min-width: 760px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
`

export const PublicBannerWrapper = styled.div`
  box-sizing: border-box;
  
  &:before {
    content: "";
    position: fixed;
    top: 240px;
    left: -100px;
    width: 200px;
    height: 210px;
    border-radius: 50% 70% 50% 40%;
    background-color: #97CAD1;
    opacity: .4;
    z-index: -5;
  }

  &:after {
    content: "";
    position: fixed;
    top: 170px;
    right: -200px;
    width: 500px;
    height: 520px;
    border-radius: 50%;
    background-color: #F65858;
    opacity: .05;
    z-index: -5;
  }

  @media screen and (min-width: 550px) {
    display: flex;
  }  
`

export const PublicBannerTitle = styled.h1`
  box-sizing: border-box;
  color: #212121;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 16px;
  line-height: 1.24;
  padding-top: 8px;

  @media screen and (min-width: 560px) {
    font-size: 44px;
    font-weight: 900;
  }

  @media screen and (min-width: 988px) {
    font-size: 56px;
  }
`

interface JoinButtonProps {
  href: string;
  role?: string;
  ariaLabel: string;
}

export const PublicBannerJoinButton = styled.a<JoinButtonProps>`
  display: inline-block;
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  text-align: center;
  text-decoration: none;
  font-size: inherit;
  background-color: #F65858;
  padding: 16px 24px;
  margin-top: 24px;
  border-color: #F65858;
  border-radius: 8px;
  color: #FFF;
  font-size: 16px;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  letter-spacing: .5px;
`

export const PublicBannerImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  position: relative;
  margin-top: 40px;
  margin-left: 20px;
  width: 100%;

  @media screen and (min-width: 760px) {
    width: 80%;
    display: flex;
    justify-content: flex-end;
  }  
`

interface PublicBannerImgProps {
  alt: string;
  src: string;
}

export const PublicBannerImage = styled.img<PublicBannerImgProps>`
  width: 100%;
  display: inline-block;
`
