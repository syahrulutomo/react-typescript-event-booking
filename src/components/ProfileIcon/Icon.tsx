import styled from 'styled-components';

interface IconProps {
  src: string;
  alt: string;
}

const Icon = styled.img<IconProps>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

export default Icon;