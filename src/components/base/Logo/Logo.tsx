import styled from 'styled-components';

export const TextLogo = styled.h1`
  font-size: 30px;
  font-family: 'Londrina Solid', cursive;
  font-weight: 400; 
  margin: 0;
`

export const LogoWrapper = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`

interface LogoProps {
  src: string;
  alt?: string;
}

export const LogoPrimary = styled.img<LogoProps>`
  width: 94.34px;
  height: 34px;
`