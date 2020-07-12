import styled from "styled-components";

export const PublicSearchBarContainer = styled.div`
  box-sizing: border-box;
  margin-top: 40px;
`

interface InputProps {
  placeholder: string;
}
 
export const PublicSearchBarInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

export const PublicSearchBarEvent = styled.input<InputProps>`
  border: 1px solid #a2a2a2;
  border-bottom: none;
  background-color: #fff;
  border-radius: 8px;
  color: #212121;
  width: 100%;
  box-sizing: border-box;
  background-image: url("images/search-glass.svg");
  padding: 8px 16px 8px 32px;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 10px;

  @media (max-width: 767px) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:focus {
    outline: none;
    border-color: #008294;
  }

  &:hover {
    border-color: #757575;
    outline: none;
  }
`

export const PublicSearchBarLocation = styled.input<InputProps>`
  border: 1px solid #a2a2a2;
  background-color: #fff;
  border-radius: 8px;
  color: #212121;
  width: 100%;
  box-sizing: border-box;
  background-image: url("images/search-glass.svg");
  padding: 8px 16px 8px 32px;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 10px;

  @media (max-width: 767px) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  &:focus {
    outline: none;
    border-color: #008294;
    border-top: 1px solid #008294;
  }

  &:hover {
    border-color: #757575;
    outline: none;
  }
`

interface ImgProps {
  src: string;
  alt?: string;
}

export const InputIcon = styled.img<ImgProps>`
  height: 18px;
  width: 18px;
  position: absolute;
  left: 10px;
`

export const PublicSearchButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: #FFF;
  border: 1px solid #008294;
  color: #008294;
  fill: #008294;
  font-size: 15px;
  font-weight: 500;
  border-radius: 8px;
  padding: 8px 16px;
  margin-top: 16px;

  &:focus {
    outline: none;
    background-color: #008294;
    color: #FFF;
  }
`