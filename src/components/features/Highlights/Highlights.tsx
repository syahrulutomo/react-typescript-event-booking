import styled from 'styled-components';

export const HighlightsContainer = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
`

export const HighlightsTitle = styled.h3`
  color: rgba(0,0,0,.87);
  font-size: 16px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  margin-top: 0;
  margin-bottom: 10px;
` 

export const HighlightsContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  background-color: #FFF;
  margin-bottom: 12px;
`

export const HighlightsContentWrapper = styled.div`
  width: 50%;
  padding: 16px 16px 4px 16px;
  border: 1px solid rgba(0,0,0,.12);

  &:nth-child(2n) {
    border-left: none;
  }
`

export const HighlightsContentTitle = styled.h4`
  color: #ED1C40;
  font-family: sans-serif, Arial, Helvetica;
  font-size: 22px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0px;
  text-align: center;
`

export const HighlightsContentText = styled.p`
  color: rgba(0,0,0,.54);
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 16px;
  text-align: center;
`