import styled from 'styled-components'

export const Container = styled.div`
margin-top: 50px;
`
export const Heading = styled.h1`
font-family: 'Roboto';
font-weight: bold;
font-size: 60px;
color: #515151;
margin-bottom: 50px;
@media only screen and (max-width: 720px) {
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  color: #515151;
}
`
export const ContactContainer = styled.div`
display: flex
` 
export const ContactItem = styled.div`
margin-right: 40px;
`