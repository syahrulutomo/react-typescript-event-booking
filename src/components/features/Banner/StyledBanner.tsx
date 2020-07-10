import styled from 'styled-components';

export const Banner = styled.div`
  background-color: #00455D;
  padding: 34px 0 48px 0;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const PublicBanner = styled.div`
  width: 100%;
  padding: 0 20px 32px 20px;
  position: relative;
  box-sizing: border-box;
`

export const PublicBannerWrapper = styled.div`
  width: 300px;
  box-sizing: border-box;
  
  &:before {
    content: "";
    position: fixed;
    top: 170px;
    left: -100px;
    width: 200px;
    height: 210px;
    border-radius: 50% 70% 50% 40%;
    background-color: #F65858;
    opacity: .2;
    z-index: -5;
  }

  &:after {
    content: "";
    position: fixed;
    top: 50px;
    right: -300px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: #97CAD1;
    opacity: .2;
    z-index: -5;
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
  box-sizing: border-box;
  position: relative;
  margin-top: 40px;
  margin-left: 20px;
  width: 100%;
`
