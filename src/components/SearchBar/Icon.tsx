import styled from 'styled-components'

interface ImgProps {
  src: string;
  alt: string;
}

export const Icon = styled.img<ImgProps>`
  width: 26x;
  height: 26px;
  position: absolute;
  right: 5px;
  color: grey;
`

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  left: 0;
  &:hover {
    cursor: pointer;
  }
`