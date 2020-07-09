import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: none;
  color: #FFF;
  font-size: 16px;
  font-family: 'Roboto', helvetica, arial, sans-serif;
  
  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  } 
`

export const Filter = styled.button`
  border-bottom: 1px solid #999;
  padding-bottom: 2px;
  border: none;
  background: transparent;
  color: #FFF;
  font-size: 16px;
  font-family: 'Roboto', helvetica, arial, sans-serif;
`