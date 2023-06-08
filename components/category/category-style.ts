import styled from 'styled-components'

export const CategoryTitle = styled.h1`
font-family: 'Roboto';
font-weight: 700;
font-size: 26px;
line-height: 30px;
color: #515151;
cursor: default;
`
export const SubCategoryTitle = styled.h1<{ active: boolean }>`
font-family: 'Roboto';
font-weight: 500;
font-size: 16px;
line-height: 0px;
color: ${props => props.active ? '#DCCAC4' : '#515151'};
background: ${props => props.active ? '#515151' : ''};
&:hover {
  color: ${props => props.active ? '#DCCAC4' : '#8A7783'};
  background: ${props => props.active ? '#515151' : 'rgba(220, 202, 196, 0.3)'};
}
border-radius: 20px;
padding: 20px;
margin-left: 20px;
cursor: pointer;
`